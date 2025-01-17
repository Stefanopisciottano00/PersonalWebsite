<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer-master/src/Exception.php';
require '../PHPMailer-master/src/PHPMailer.php';
require '../PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    // Configura PHPMailer
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'gnldm1099.siteground.biz';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@stefanopisciottano.it';  // Sostituisci con il tuo indirizzo email
        $mail->Password   = '2i@222_t6i24';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  // Utilizza SSL
        $mail->Port       = 465;  // Porta SMTP


        $mail->setFrom($email, $name);
        $mail->addAddress('info@stefanopisciottano.it', 'Stefano Pisciottano');
        $mail->Subject = 'Email ricevuta dal sito web';
        $mail->Body    = 'Messaggio da: ' . $name . ' (' . $email . ")\n\n" . $message;

        $mail->send();
        echo 'Email inviata con successo';
    } catch (Exception $e) {
        echo "Errore nell'invio dell'email: {$mail->ErrorInfo}";
    }
} else {
    // Se i dati non sono stati inviati tramite il metodo POST, gestisci di conseguenza (ad esempio, reindirizza o mostra un messaggio di errore).
    echo 'Errore: Dati non inviati tramite il modulo.';
}
?>