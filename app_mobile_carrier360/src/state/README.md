# Redux & Saga Paradigms

Redux gives us the concepts of *State*, *Actions*, *Reducers*, & *Selectors*.  Sagas tie into the paradigm of Redux by responding to and dispatching redux actions.

## State

Be sure not to confuse the two notions of state that exist in our app.  Each `Component` has its own local state (`this.state`), and the app has a global state.  The global state is the one we are talking about when referring to the redux state or store.  The redux state is distinct from any component's state, and we control what portion of the redux state is seen by each component (via selectors and `connect`, discussed below).  Most component state-updates will not involve redux at all - rather they will just involve `this.setState()`, the purpose of which is to update the component's state and to then trigger an optimized re-render of the component.

Also be sure not to confuse the redux store with persisted storage.  The redux store holds the app's global state in memory, but is not persisted by default.  We have, however, included the `redux-persist` plugin, which saves (part of) the redux state in persistent storage.  So the store is now stored but that's not because it's called the store.

## Actions

Redux actions trigger updates of the redux state.  We control how the redux state is updated upon each action (via reducers, discussed below).

Objects of the form

```ts
{
  type: string;
  payload: any;
}
```
are _action objects_ - representations of redux actions - and we should generally never write out that object form when using actions in our code.  Instead, make an _action creator_ function in the `state/actions` directory, and always use that function to dispatch actions.  The action creator function should also take appropriate parameters to fill the payload with anything specific to that action.

### Action Types

The `type` property in action objects.  All action types should be defined as constants somewhere under the `state/types` directory.  In an effort to stay DRY, always use that constant when referencing that action type, even in the action creator function for that type of action.  We keep a separate directory for action type string constants because our reducers make decision based on action type, and our sagas are listening for actions by their type (more on that under Sagas).  So action types and action creators are not always used in the same place.

In order to stay consistent, whenever we have actions that are a part of some request-response cycle, we will use the suffixes `Start`, `Fail`, and `Succeed`.  For example, logging in should involve three possible actions:

- `AUTHENTICATION/LOGIN/START`
- `AUTHENTICATION/LOGIN/FAIL`
- `AUTHENTICATION/LOGIN/SUCCEED`

Since this pattern is systematic, please use the provided [request-response action type set creator function](types/generic/requestResponse.types.js) to create these three action types in one line (see corresponding test for usage example).  This pattern is also generalized for action creators - see the [request-response action creator set creator function](actions/generic/requestResponse.actions.js); and for respective reducers - see the [request-response reducer creator function](reducers/generic/requestResponse.reducer.js)

## Reducers

AKA state-transition functions.  Given the present redux state and an action, the reducer computes the next redux state.  I say *the reducer* and not *reducers* here because it helps to recall that in a way there is only one reducer, formed as a hierarchical combination of all the app's reducers.

> One Reducer to rule them all, One Reducer to find them,  
> One Reducer to bring them all and in the Redux bind them

The one-reducer concept makes it easier to understand how redux is operating: when you dispatch an action, the immediate consequence of that is the reducer being called (as well as any middleware, like Saga).  The returned new state is then passed along to `connect`ed components.

## Container Components

Speaking of passing the updated redux state to connected components&hellip;.

`react-redux` provides the `connect` function, which creates a function which turns a React Component into a Redux Container Component.  This means that the component subscribes to redux state updates and has a shortcut to the `dispatch` function.  In React Native, screens become the containers (i.e. get `connect`ed).  Take a simple example:

```js
const mapStateToProps = state => ({
  message: state.comms.message
});
class MessageScreen extends Component {
  render() {
    return <Text>{ this.props.message }</Text>;
  }
}
const toContainer = connect(mapStateToProps);
export default toContainer(MessageScreen);
```

As the name `mapStateToProps` suggests, it takes the *Redux* state and adds to the *Component's* props.  

### Pass in *only* what is required

It's important to only use parts of the redux state that the screen will need, because `connect` will optimize the way redux state updates propagate to container components.  If, after a redux state update, the result of `mapStateToProps` has not changed, then naturally that screen does not need to re-render.  For example: let's say there is another property of `comms` in the above example called `subject`; if we had made `mapStateToProps` as `state => ({ comms: state.comms })`, then even if `state.comms.subject` were the only thing that had changed in a redux state update the MessageScreen would still re-render despite not making use of the `subject`.

### Selectors

Selectors are functions which take the redux state, and return a specific portion of it.  They are helpful for use in `mapStateToProps` and should be created even for trivial transformations.  See [this video](https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers) which gives an expert explanation of a chief benefit of using selector functions.

In short, the selector function acts as a bridge between the redux state shape and your container components; consequently, if you make a change to the shape of the redux state, then as long as you are using selectors systematically, then the only code requiring update would be the reducers and selectors which act on that piece of the state.  Conveniently, the container components (screens) would not require any changes; especially convenient if you use a selector on multiple screens.

## Dispatching Actions

Our app will be dispatching redux actions from two places: Screens & Sagas.  Dispatching from sagas is discussed under the Sagas sections.

To dispatch a redux action from a screen, you should be making a `mapDispatchToProps` function and passing it as the second parameter to `connect`.  Only use react-navigation’s dispatcher (`this.props.navigation.dispatch()`) for actions made from NavigationActions.  (*react-navigation uses redux actions too so `this.props.navigation.dispatch()` will actually work, but as our app gets bigger, the convenience and tidiness of using `mapDispatchToProps` becomes clearer.*)

Example from our app:

```js
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  genesis: () => dispatch(AppActions.genesis()),
});
class Splash extends Component {
  ...
  componentDidMount() {
    this.props.genesis();
    ...
  }
  ...
}
const reduxify = connect(mapStateToProps, mapDispatchToProps);
const stylify = connectStyle('C360.Splash', styleDef);
export default stylify(reduxify(Splash));
```

See the [Splash screen file](./src/screens/Splash/Splash.js) for the full picture.

## Sagas

Sagas define the "side-effects" of actions, and are therefore entirely dependent on redux actions.  The execution of saga functions can always be traced back to the occurrence of some redux action.

The functions `take`, `takeEvery`, `takeLatest`, etc. are how we get a saga to listen for actions and execute other sagas when those actions are heard.  Generally those *listener sagas* will just be entryways into other sagas - *worker sagas*.  Sagas can dispatch redux actions with the `put` function.  The [redux-saga homepage](https://redux-saga.js.org/) has a good introductory example of a basic remote fetch procedure done with sagas.  The outline of the procedure is:

1. The root saga starts listener sagas as the app starts.
2. Something triggers the dispatch of a redux action.
3. A listener saga (using `takeEvery` or `takeLatest`) hears the action it is listening for, and in turn calls a worker saga, passing along the action as a parameter to the worker.
4. The worker saga executes an asynchronous function from a service (the logic specific to a service will always be in the service code, not in the saga code).
5. Once the async operation completes (or throws an error), its result or error is used to dispatch another redux action (using `put`), with the pertinent info of the result placed in the action's payload.
6. That action will trigger the execution of the root reducer, which will likely trigger a screen's re-rendering.
