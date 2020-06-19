#!/usr/bin/env bash
# File: guessinggame.sh

echo "Welcome to my Guessing-Game!"
echo "How many files are there in the current directory?"
answer=$(ls | wc -l)

function type_number {
echo "Type in an integer and then press Enter:"
read number
}

type_number

while :
do
  expr "$number" + 1 > /dev/null 2>&1
  if [[ $? -gt 1 ]]; then
    echo "You need to input an INTEGER. Try again!"
    type_number
  elif [[ $number -eq $answer ]]; then
    echo "Congratulation! Yes, the answer is $answer."
    break
  elif [[ $number -lt $answer ]]; then
    echo "Oops! Your guess was too low. Try again!"
    type_number
  else
    echo "Oops! Your guess was too high. Try again!"
    type_number
  fi
done
