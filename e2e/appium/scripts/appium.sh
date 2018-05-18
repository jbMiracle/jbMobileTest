# Input Parameters
PLATFORM_NAME=$1
TEST_PLAN=$2
TEST_ENV=$3
USERNAME=$4
ACCESSKEY=$5
BUILD_LOCATION=$6

echo "Running with attributes:"
echo "--------------------------------"
echo "Platform Name: $PLATFORM_NAME"
echo "Test Plan: $TEST_PLAN"
echo "Environment: $TEST_ENVIRONMENT"
echo "Build Location: $BUILD_LOCATION"
echo ""

echo "Starting..."
if [ "$TEST_ENV" == "REMOTE" ]; then
  UPLOAD_URL="https://api-cloud.browserstack.com/app-automate/upload"

  echo "Uploading Build File..."

  BUILD_HASH=$(curl -sb -X POST \
    -u "$USERNAME:$ACCESSKEY" \
    -F "file=$BUILD_LOCATION" \
    $UPLOAD_URL | cut -d "\"" -f 4)
fi

echo "Running test case..."

if [ $TEST_PLAN ]; then
  PLATFORM_NAME=$PLATFORM_NAME BUILD_HASH=$BUILD_HASH USERNAME=$USERNAME TEST_ENV=$TEST_ENV ACCESSKEY=$ACCESSKEY TEST_PLAN=$TEST_PLAN npm run appium
else
  PLATFORM_NAME=$PLATFORM_NAME BUILD_HASH=BUILD_HASH USERNAME=$USERNAME TEST_ENV=$TEST_ENV ACCESSKEY=$ACCESSKEY npm run appium
fi
