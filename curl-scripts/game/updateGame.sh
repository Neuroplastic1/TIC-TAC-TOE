API="https://tic-tac-toe-wdi.herokuapp.com"
URL_PATH="/games/:id"
ID="5ee2349444011d00171b5ace"
curl "${API}${URL_PATH}${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
