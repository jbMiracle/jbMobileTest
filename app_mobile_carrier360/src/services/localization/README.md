## Localization

### Adding copy
We'd like the copy to be broken down based on screens

```
  login: {
    login_button: 'Log In',
  },
  home: {
    some_text: 'Some text',
    test: 'test',
    hello: 'Hello {{name}}',
    messages: {
      one: 'You have 1 new message',
      other: 'You have {{count}} new messages',
      zero: 'You have no messages',
    },
  }
```

### Strings function
The first parameter in the strings function is the string you want to use. Using the login_button about as an example,
you would use that like so:
```
  strings('login.login_button')
```

### params
You can use the 'params' parameter to force the function to use a specific language:
```
  strings('login.login_button', { locale: "es" })
```

You can also use it to provide a default string to use:
```
  strings("some.missing.scope", {defaults: [{message: "Some message"}]});
```

You can also use it to pass in strings to use in the translation. Below uses the 'hello' from home screen above.
```
  strings('home.hello', {name: 'John'})
```

You can also use it for pluralization:
```
  strings('home.messages', {count: 10})
```

You can also use this to reuse scope, so you don't have to use dot notation all over the place:
```
  const options = { scope: 'home' };
  strings("some_text", options);
  strings("test", options);
```

### More info:
- https://github.com/AlexanderZaytsev/react-native-i18n
- https://github.com/fnando/i18n-js
