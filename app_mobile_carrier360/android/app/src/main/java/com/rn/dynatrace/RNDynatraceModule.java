package com.rn.dynatrace;

import android.util.Log;

import com.dynatrace.android.agent.DTXAction;
import com.dynatrace.android.agent.Dynatrace;
import com.dynatrace.android.agent.conf.DynatraceConfigurationBuilder;
import com.dynatrace.android.agent.conf.Configuration;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Calendar;
import java.util.Date;

public class RNDynatraceModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public RNDynatraceModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNDynatrace";
    }

    private Date getCurrentTime() {
        Date currentTime = Calendar.getInstance().getTime();
        return currentTime;
    }

    @ReactMethod
    public void startup(String appId, String envId, String serverURL) {
        Configuration config = new DynatraceConfigurationBuilder(appId, envId, serverURL).buildConfiguration();
        int statusCode = Dynatrace.startup(reactContext, config);

        Log.v("Dynatrace", "Dynatrace startup at " + getCurrentTime() + " returned code " + statusCode);
    }

    @ReactMethod
    public void shutdown() {
        Dynatrace.shutdown();

        Log.v("Dynatrace", "Dynatrace shutdown at " + getCurrentTime());
    }

    @ReactMethod
    public void enterAction(String actionName) {
        DTXAction action = Dynatrace.enterAction(actionName);

        Log.v("Dynatrace", "Dynatrace action " + actionName +  " sent at " + getCurrentTime() + " returned " + action);
    }

    @ReactMethod
    public void identifyUser(String userId) {
        int statusCode = Dynatrace.identifyUser(userId);

        Log.v("Dynatrace", "Dynatrace user event sent at " + getCurrentTime() + " for " + userId + " returned " + statusCode);
    }
}
