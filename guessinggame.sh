clear
declare -i numFiles
numFiles=$(find . -maxdepth 1 -not -type d | wc --lines)

function
guess {
echo "Can you guess the number of files in current directory? Your
gues is: "
n1=$(ls -F |grep -v / | wc -l)
while read n2; do
if [[ $n2 -eq $n1 ]]; then
echo "Congratulations"
break;
else
echo
if [[ $n2 -gt $n1 ]]; then
echo -n "Your guess is too high. New guess:"
elif [[ $n2 -lt $n1 ]]; then
echo -n "Your guess is too low. New guess:"
fi
fi
done
}
Guess
