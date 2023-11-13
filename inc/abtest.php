<?php 
//Villkor som bara kör funktionen vid första laddning - Session-timeout 60 min (default)
if( !isset($_SESSION['last_access']) ){
    if ( file_exists("inc/global.txt") ) {
        //Kollar vilket värde som står i textfilen - läser från textfilen
        $myfile = fopen("inc/global.txt", "r") or die("Unable to open file!");
        $currentvalue = fgetc($myfile);
        fclose($myfile);
        //Ändrar värdet mellan 0 och 1 - skriver i textfilen på servern
        if($currentvalue == "1" || $currentvalue == "0"){
            if($currentvalue == "1"){
                $txt = "0";
            }else{
                $txt = "1";
            }
            $myfile = fopen("inc/global.txt", "w") or die("Unable to open file!");
            fwrite($myfile, $txt);
            fclose($myfile);
            //Sätter en sessionsvariabel till det värdet som stod i filen vid första laddning
            $_SESSION['last_access'] = $currentvalue;
            //skickar vidare användaren till olika sidor baserat på sessionsvariabeln
            redirect($urlB);
        }
    }
}
//funktion som skickar besökaren till olika sidor
function redirect($urlB){
    $urlB = strtok($urlB, "?");
    if($_SESSION['last_access'] == "1"){
        header("location:$urlB");
        exit();
    }
}