# Input Parameters
PLATFORM_NAME=$1
TEST_CASE=$2
TEST_ENV=$3
USERNAME=$4
ACCESSKEY=$5
BUILD_LOCATION=$6


echo "Running with attributes:"
echo "--------------------------------"
echo "Platform Name: $PLATFORM_NAME"
echo "Test Case: $TEST_CASE"
echo "Environment: $TEST_ENVIRONMENT"
echo "Build Location: $BUILD_LOCATION"
echo ""

# Functions
upload_binaries()
{
  UPLOAD_URL="https://api-cloud.browserstack.com/app-automate/upload"

  echo "Uploading Build File..."

  BUILD_HASH=$(curl -sb -X POST \
    -u "$USERNAME:$ACCESSKEY" \
    -F "file=$BUILD_LOCATION" \
    $UPLOAD_URL | cut -d "\"" -f 4)

}

test_case()
{
  echo "Running test case..."

  if [ $TEST_CASE ]; then
    PLATFORM_NAME=$PLATFORM_NAME BUILD_HASH=$BUILD_HASH USERNAME=$USERNAME TEST_ENV=$TEST_ENV ACCESSKEY=$ACCESSKEY npm run appium -t $TEST_CASE
  else
    PLATFORM_NAME=$PLATFORM_NAME BUILD_HASH=BUILD_HASH USERNAME=$USERNAME TEST_ENV=$TEST_ENV ACCESSKEY=$ACCESSKEY npm run appium
  fi
}

# Main Program

echo "Starting..."

if [ "$TEST_ENV" == "REMOTE" ]; then
  upload_binaries
fi

test_case

