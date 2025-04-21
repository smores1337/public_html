<?php
/***
This function will read the full structure of a directory. It's recursive becuase it doesn't stop with the one directory, it just keeps going through all of the directories in the folder you specify.

http://www.codingforums.com/showthread.php?t=71882
***/

function getDirectory( $path = '.', $level = 0 ){ 
    global $list;
    $ignore = array( 'cgi-bin', '.', '..' ); 
    // Directories to ignore when listing output. Many hosts 
    // will deny PHP access to the cgi-bin. 

    $dh = @opendir( $path ); 
    // Open the directory to the handle $dh 
     
    while( false !== ( $file = readdir( $dh ) ) ){ 
    // Loop through the directory 
     
        if( !in_array( $file, $ignore ) ){ 
        // Check that this file is not to be ignored 
             
            $spaces = str_repeat( '&nbsp;', ( $level * 4 ) ); 
            // Just to add spacing to the list, to better 
            // show the directory tree. 
             
            if( is_dir( "$path/$file" ) ){ 
            // Its a directory, so we need to keep reading down... 
                //echo "<strong>$spaces $file</strong><br />"; 
                $list .= sprintf("<li>%s %s</li>",$spaces, $path."/".$file);
                getDirectory( "$path/$file", ($level+1) ); 
                // Re-call this same function but on a new directory. 
                // this is what makes function recursive. 
             
            } else { 
                $info = pathinfo($file);
                //if (in_array($info["extension"],["php","html","js","css"]))
		if (isset($info["extension"]) && in_array($info["extension"], ["php", "html", "js", "css"]))
                $list .= $spaces . sprintf("<li>%s <a target='_blank' href='?s=1&p=%s'>%s</a></li>",$spaces, $path."/".$file,$file);
                // echo "$spaces $file<br />"; 
                // Just print out the filename 
             
            } 
         
        } 
     
    } 
     
    closedir( $dh ); 
    // Close the directory handle 

}

$s = $_REQUEST['s'] ?? '';
  if(empty($s)){
    $list = '';
    getDirectory();
    echo '<ul>' . $list . '</ul>';
  }
$path = $_REQUEST['p'] ?? '';
  if(!empty($path))
    show_source($path);
    
