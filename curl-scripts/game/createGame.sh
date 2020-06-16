#run curl script in terminal sh curl-scripts/game/create-game.sh

API="https://tic-tac-toe-wdi.herokuapp.com"
URL_PATH="/games"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
