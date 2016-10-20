<?php

$fileData = file_get_contents ( 'php://input' );
$data = json_decode ( $fileData );
$retour = 0; $resultat = false;
foreach($data->gps->glossaire as $key=>$label) {
	$resultat[$key] = $label . ' : ' . $data->gps->resultat->{$key}; 
}
$resultat = implode(', ', $resultat);
if (! empty ( $data->user->name ) && ! empty ( $data->user->email && ! empty ( $data->user->dest ) )) {
	$to = $data->user->dest;
	$subject = 'Pour vivre un GPS ] Résultats de ' . $data->user->name ;
	$message = 'Pour vivre un GPS ] Résultats de ' . $data->user->name . "\r\n\r\n" . $resultat;
	$headers = 'From: ' . $data->user->email . "\r\n" . 'Reply-To: ' . $data->user->email . "\r\n" . 'X-Mailer: PHP/' . phpversion ();
	$retour = mail ( $to, $subject, $message, $headers );
}
echo $retour;
?>

