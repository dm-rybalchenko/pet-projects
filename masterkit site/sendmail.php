<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	


	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);
	
	//От кого письмо
	$mail->setFrom('mailer@a0692700.xsph.ru', 'Dmitry');
	//Кому отправить
	$mail->AddBCC($_POST['email']);
	$mail->AddBCC('rybalchenko.stavr@yandex.ru');
	



	//Тема письма
	$mail->Subject = 'Тестовая отправка формы на почту';

	//Тело письма
	$body = '<p>Это письмо отправлено с сайта <b>Master Kit</b></p><p>Оно говорит о том, что Дмитрий освоил прием данных форм с сайта и отправку их по email!</p><p>Но пока еще не освоил, как вытащить это письмо из спама :\'(</p><p><strong>Ваши данные</strong></p>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}




	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()){
		$message = 'Ошибка'. $mail->ErrorInfo;
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>