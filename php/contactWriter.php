<?php
    header('Content-type: application/json');
    $response_array['status'] = 'success';
    $myfile = fopen("contactsListings.json", "w") or die("Unable to open file!");
      $txt = json_decode($_POST[contactsList]);
      fwrite($myfile, $txt);
      fclose($myfile);
    echo json_encode($response_array);
?>
