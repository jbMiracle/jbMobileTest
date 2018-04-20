# Input Parameters
process.env.ipaPath = $process.env.ipaPath
TEST_CASE=$1
USERNAME=$2
ACCESSKEY=$3
TEST_ENV=$4

# TODO: This will eventually be a relative path to the binaries in the project

IPA_LOCATION=$process.env.ipaPath
APK_LOCATION=/Users/jisqsk3/Desktop/app.zip
# Replace with "http://www.mocky.io/v2/5ac6c1f84a00007e357e0839" to avoid uploading IPA/APK each time.
UPLOAD_URL="https://api-cloud.browserstack.com/app-automate/upload"

IPA_HASH=$(curl -sb -X POST \
	-u "$USERNAME:$ACCESSKEY" \
	-F "file=@$IPA_LOCATION" \
	$UPLOAD_URL | cut -d "\"" -f 4)

APK_HASH=$(curl -sb -X POST \
	-u "$USERNAME:$ACCESSKEY" \
	-F "file=@$APK_LOCATION" \
	$UPLOAD_URL | cut -d "\"" -f 4)

IPA_HASH=$IPA_HASH APK_HASH=$APK_HASH USERNAME=$USERNAME TEST_ENV=$TEST_ENV ACCESSKEY=$ACCESSKEY npm run test -t ../$TEST_CASE







