-- Insert data to `account` table
INSERT INTO public.account (
	account_firstname, 
	account_lastname,
	account_email,
	account_password
	)
VALUES (
	'Tony', 
	'Stark',
	'tony@starkent.com',
	'1am1ronM@n'
	);

-- Update Tony's `account_type` in `account` table
UPDATE public.account
SET account_type = 'Admin'
WHERE account_firstname = 'Tony';

-- Delete Tony's record
DELETE FROM public.account
WHERE account_firstname = 'Tony';

-- Modify `GM Hummer` record
UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_id = 10;

-- Select `make` and `model` fields for `sport` category
SELECT public.inventory.inv_make, public.inventory.inv_model, public.classification.classification_name
FROM public.inventory
INNER JOIN public.classification
ON public.inventory.classification_id = public.classification.classification_id
WHERE public.classification.classification_id = 2;

-- Update file paths on columns `inv_image` and `inv_thumbnail` on `inventory` table
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images', '/images/vehicles'),
	inv_thumbnail = REPLACE(inv_thumbnail, '/images', '/images/vehicles');
