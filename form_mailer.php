
<?php

/* These are the variable that tell the subject of the email and where the email will be sent.*/

$emailSubject = 'Inquiry on Dawn Of Kings!';
$userSubject = 'Your inquiry with Dawn Of Kings';
$mailto = 'eldad.corem@gmail.com';


/* These will gather what the user has typed into the fieled. */

$name = $_POST['Name'];
$email = $_POST['email'];
$subject = $_POST['dropdown'];
$question = $_POST['ReasonToContact'];

/* This takes the information and lines it up the way you want it to be sent in the email. */

$body = <<<EOD
<br><hr><br>
Name: $name <br>
Email: $email <br>
Subject : $subject <br>
Question:<br> $question<br>
EOD;

$userBody = <<<EOD
<br><hr><br>
$name היקר, תודה על פנייתך לאתר.<br>
 אנשי האתר יגיעו אליה במהרה ויענו לך בהקדם.<br>
בברכה, צוות האתר<br>
EOD;

$headers = "From: $email\r\n"; // This takes the email and displays it as who this email is from.
$headers .= "Content-type: text/html\r\n"; // This tells the server to turn the coding into the text.
$success = mail($mailto, $emailSubject, $body, $headers); // This tells the server what to send.
$success = mail($email, $userSubject, $userBody, $headers); // This tells the server what to send.

?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Form Mailer</title>
</head>

<body style="direction : rtl">
<p>תודה על פנייתך!</p>
<p>מנהל האתר יעבור על תוכן פנייתך ויחזור אליך עד 48 שעות.</p>
<p>לחזרה לאתר הראשי לחץ <a href="index.html">כאן</a></p>
</body>
</html>