clear
declare -i numFiles
numFiles=$(find . -maxdepth 1 -not -type d | wc --lines)

function makeVaildGuess {
   until read -p "Uneti koliko datoteka ima u trenutnom direktorijumu: " guess;
   [[ "$guess" =~ ^ [0-9] + $ ]] ; do
        echo -e "\nUnesite nenegativnu celobrojnu vrednost!\n"
   done
}
while makeVaildGuess; do
    if (( guess < numFiles )) ; then 
       echo -e "\nVasa procena je premala."
    elif (( guess > numFiles )) ; then
       echo -e "\nVasa procena je prevelika."
    else 
       echo -e "\nCestitke! Odgovor $numFiles je tacan!"
       exit
    fi
 done
   

