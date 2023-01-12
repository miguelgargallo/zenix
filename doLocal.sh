commands=( # Define commands in an array
    "cd backend && ./pocketbase serve" #1 Launch Database
    "npm run zenix" #2 Launch Dev Zenix
    "npm run start-zenix" #3 Start Zenix
    "npm run build-zenix" #4 Build Zenix
    "npm run preview-zenix" #5 Preview Zenix
    "npm run astro-zenix" #6 Rocket Zenix
    "npm run clean-zenix" #7 Clean Zenix
    "rm -r bye-zenix" #8 Bye Zenix
    "rm -r npm clean-dev-zenix" #9 Clean Dev Zenix
    "rm -r npm clean-build-zenix" #0 Clean Build Zenix
    "sudo rm -r npm sudo-clean-zenix" #q Sudo Clean Zenix
    "sudo rm -r npm sudo-bye-zenix" #w Sudo Bye Zenix
    "sudo rm -r npm sudo-clean-dev-zenix" #e Sudo Clean Dev Zenix
    "sudo rm -r npm sudo-clean-build-zenix" #r Sudo Clean Build Zenix
)
clear # Clear the terminal
echo "  "
echo " Zenix Software © 2023 All Rights Reserved. Pencil Works LLC. Software under Pylar AI creative ML License."
echo "  "
echo " ___________  "
echo "| 1 | 2 | 3 | #1 Launch Database"
echo "|___|___|___| #2 Launch Dev Zenix"
echo "| 4 | 5 | 6 | #3 Start Zenix"
echo "|___|___|___| #4 Build Zenix"
echo "| 7 | 8 | 9 | #5 Preview Zenix"
echo "|___|___|___| #6 Rocket Zenix"
echo "              #7 Clean Zenix"
echo "    ZENIX     #8 Bye Zenix"
echo "              #9 Clean Dev Zenix"
echo "  FRAMEWORK   #0 Clean Build Zenix"
echo "              #q Sudo Clean Zenix"
echo " ___________  #w Sudo Bye Zenix"
echo "| q |   | e | #e Sudo Clean Dev Zenix"
echo "|___| 0 |___| #r Sudo Clean Build Zenix"
echo "| w |   | r | "
echo "|___|___|___| Press any other key to quit:"
echo "  "
read -p " Select an option: " option # Read user input and store it in a variable
clear # Clear the terminal
if [[ ! $option =~ ^[0-9qwei]$ ]]; then # Validate user input
    echo "Invalid option"
    exit 1
fi
eval "${commands[$(( $option - 1 ))]}" # Execute command based on user input
clear # Clear the terminal and print a success message
echo "Command executed successfully!"