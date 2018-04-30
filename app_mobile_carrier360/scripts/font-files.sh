rename_files=false
while getopts ":r" opt; do
  case ${opt} in
    r ) rename_files=true
      ;;
    \? ) echo "Usage: cmd [-r]"
;; esac
  done
  for file in "$arg"*.{ttf,otf}; do
    postscriptname=$(fc-scan --format "%{postscriptname}\n" "$file");
    printf "\033[36m PostScript Name:\033[0m %s \e[90m(%s)\033[0m\n" "$postscriptname" "$file";
    if [ "$rename_files" = true ] ; then
      extension="${file##*.}"
      newname="$postscriptname.$extension"
      printf "renaming %s to %s\n\n" "$file" "$newname"
      mv "$file" "$newname"
    fi
  done
