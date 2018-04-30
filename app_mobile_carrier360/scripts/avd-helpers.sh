
if [[ -z $ANDROID_HOME ]]
then
  echo 'Please set ANDROID_HOME the root directory of your Android SDK'
else

  if [[ -z $DEFAULT_AVD ]]
  then
    echo 'No DEFAULT_AVD is set, so I will simply pick the first available AVD'
  fi

  # Blindly picks the name of the first available virtual device
  function EchoFirstAvdName {
    $ANDROID_HOME/tools/emulator -list-avds | head -1
  }

  # Prints the name of your chosen default AVD, or (if you didn't choose one)
  # it will print the name of the first available AVD
  function EchoDefaultAvdName {
    echo ${DEFAULT_AVD:-$(EchoFirstAvdName)}
  }

  # launches the optionally specified AVD
  # With no argument, it will use $DEFAULT_AVD or the first available AVD
  # e.g.: LaunchAvdForeground Nexus_5X_API_23
  function LaunchAvdForeground {
    local avdName=${1:-$(EchoDefaultAvdName)}
    echo "Launching AVD: $avdName"
    $ANDROID_HOME/tools/emulator -avd $avdName
  }

  # launches the optionally specified AVD as a background process
  # With no argument, it will use $DEFAULT_AVD or the first available AVD
  # e.g.: LaunchAvdBackground Nexus_5X_API_23
  function LaunchAvdBackground {
    local avdName=${1:-$(EchoDefaultAvdName)}
    echo "Launching AVD: $avdName"
    nohup $ANDROID_HOME/tools/emulator -avd $avdName &>/dev/null &
  }

  # Launches the optionally specified AVD only if no android emulator
  # is presently running.  Note that this will skip launching if any
  # android emulator is already running - not just the emulator of the
  # AVD you specify (if you specified).
  function LaunchAvdIfNeeded {
    if [[ -z $(pgrep emulator) ]]; then LaunchAvdBackground $1; fi
  }

fi
