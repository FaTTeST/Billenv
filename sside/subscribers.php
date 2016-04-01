<?php
include("../assets/datatables/Editor-1.5.5/php/DataTables.php");

use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Mjoin,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'subscribers', 'id' )
	->fields(
	    Field::inst( 'id' )
    		->validator( 'Validate::none' ),
		Field::inst( 'surname' )
			->validator( 'Validate::none' ),
		Field::inst( 'name' )
			->validator( 'Validate::none' ),
		Field::inst( 'patronymic' )
			->validator( 'Validate::none' ),
		Field::inst( 'org_name' )
			->validator( 'Validate::none' ),
		Field::inst( 'short_name' )
			->validator( 'Validate::none' ),
		Field::inst( 'inn' )
			->validator( 'Validate::none' ),
		Field::inst( 'kpp' )
			->validator( 'Validate::none' ),
		Field::inst( 'business_address' )
			->validator( 'Validate::none' ),
		Field::inst( 'post_address' )
			->validator( 'Validate::none' ),
		Field::inst( 'bank_account' )
			->validator( 'Validate::none' ),
		Field::inst( 'bik_bank' )
			->validator( 'Validate::none' ),
		Field::inst( 'phone' )
			->validator( 'Validate::none' ),
		Field::inst( 'email' )
			->validator( 'Validate::none' )
			->validator( 'Validate::email' ),
   		Field::inst( 'org_type' )
            ->validator( 'Validate::notEmpty' )

	)
	->process( $_POST )
	->json();