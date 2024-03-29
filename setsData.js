var sets = [
new ColorSet('my (Vallejo) paints', '', '', [
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Neutral Grey', '70.992', 'rgb(101, 119, 121)'),
		new Product('Medium Sea Grey', '70.870', 'rgb(118, 124, 134)'),
		new Product('Dark Bluegrey', '70.867', 'rgb(63, 75, 70)'),
		new Product('Red', '70.926', 'rgb(145, 38, 44)'),
		new Product('Flat Yellow', '70.953', 'rgb(254, 208, 26)'),
		new Product('German Camouflage Light Green', '70.833', 'rgb(84, 133, 54)'),
		new Product('German Camouflage Dark Green', '70.979', 'rgb(43, 73, 63)'),
		new Product('Andrea Blue', '70.841', 'rgb(1, 131, 193)'),
		new Product('Blue', '70.925', 'rgb(0, 50, 97)'),
		new Product('Cork Brown', '70.843', 'rgb(167, 121, 88)'),
		new Product('Burnt Umber', '70.941', 'rgb(103, 82, 65)'),
		// not standard yellow!
		new Product('Transparent Yellow', '70.937'),
		new Product('Black Wash', '73.201', 'rgb(0, 0, 0)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR),
		new Product('Umber Wash', '73.203', 'rgb(105, 92, 82)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR),
		new Product('Fleshtone Wash', '73.204', 'rgb(174, 121, 116)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR),
		new Product('Thinner Medium', '70.524', undefined, PRODUCT_CATEGORIES.AUXILIARIES)
	]),
new ColorSet('bogus set', '42.xxx', 'http://yourmom.com', [
		new Product('Very Pleasing Color', '70.xxx', 'rgb(86, 42, 23)'),
		new Product('Model Air Color', '71.xxx', 'rgb(42, 86, 23)',
			PRODUCT_CATEGORIES.PAINT, PRODUCT_RANGES.MODEL_AIR),
		new Product('Wash', '76.xxx', 'rgb(86, 23, 42)',
			PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.MODEL_WASH),
		new Product('Pigment', '73.xxx', 'rgb(42, 23, 86)',
			PRODUCT_CATEGORIES.PIGMENT, PRODUCT_RANGES.PIGMENTS),
		new Product('Game Color Wash', '73.xxx', 'rgb(23, 42, 86)',
			PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR),
		new Product('Lovely Medium', '73.xxx', undefined,
			PRODUCT_CATEGORIES.MEDIUM, PRODUCT_RANGES.AUXILIARIES),
		new Product('Pasty Paste', '26.xxx', undefined, PRODUCT_CATEGORIES.PASTE,
			PRODUCT_RANGES.AUXILIARIES, PRODUCT_LINES.DECORATIVE_ARTS)
	]),
new ColorSet('Wargames Basics', '70.103', 'http://www.acrylicosvallejo.com/en_US/wargames-basics/family/15/8', [
		new Product('Intermediate Green', '70.891', 'rgb(69, 140, 60)'),
		new Product('Orange Red', '70.910', 'rgb(222, 67, 23)'),
		new Product('Dark Flesh', '70.927', 'rgb(221, 169, 92)'),
		new Product('Saddle Brown', '70.940', 'rgb(141, 85, 70)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Medium Blue', '70.963', 'rgb(1, 95, 129)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)')
	]),
new ColorSet('Elfos', '70.104', 'http://www.acrylicosvallejo.com/en_US/elfos/family/15/9', [
		new Product('Carmine Red', '70.908', 'rgb(181, 26, 40)'),
		new Product('Light Flesh', '70.928', 'rgb(255, 240, 217)'),
		new Product('Transparent Blue', '70.938', 'rgb(131, 148, 168)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Sky Blue', '70.961', 'rgb(157, 217, 243)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)'),
		new Product('Light Yellow', '70.949', 'rgb(253, 232, 91)'),
		new Product('Gold', '70.996', 'rgb(207, 178, 86)')
	]),
new ColorSet('Orcs and Goblins', '70.105', 'http://www.acrylicosvallejo.com/en_US/orcos-y-goblins/family/15/10', [
		new Product('Lime Green', '70.827', 'rgb(121, 170, 52)'),
		new Product('Light Yellow', '70.949', 'rgb(253, 232, 91)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('German Camouflage Dark Green', '70.979', 'rgb(43, 73, 63)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)'),
		new Product('Copper', '70.999', 'rgb(171, 78, 37)'),
		new Product('Intermediate Green', '70.891', 'rgb(69, 140, 60)'),
		new Product('Vermillion', '70.909', 'rgb(207, 26, 35)')
	]),
new ColorSet('Non Death Chaos', '70.106', 'http://www.acrylicosvallejo.com/en_US/non-death-chaos/family/15/11', [
		new Product('Ivory', '70.918', 'rgb(245, 244, 223)'),
		new Product('Oily Steel', '70.865', 'rgb(122, 124, 113)'),
		new Product('Vermillion', '70.909', 'rgb(207, 26, 35)'),
		new Product('Sand Yellow', '70.916', 'rgb(222, 197, 117)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('Purple', '70.959', 'rgb(132, 72, 100)'),
		new Product('Copper', '70.999', 'rgb(171, 78, 37)'),
		new Product('Magenta', '70.945', 'rgb(164, 27, 71)')
	]),
new ColorSet('Panzer Colors', '70.108', 'http://www.acrylicosvallejo.com/en_US/panzer-colors/family/15/12', [
		new Product('Black Grey', '70.862', 'rgb(45, 55, 56)'),
		new Product('Chocolate Brown', '70.872', 'rgb(97, 78, 63)'),
		new Product('Green Brown', '70.879', 'rgb(148, 124, 80)'),
		new Product('Khaki Grey', '70.880', 'rgb(144, 130, 83)'),
		new Product('Reflective Green', '70.890', 'rgb(75, 101, 66)'),
		new Product('Dark Yellow', '70.978', 'rgb(163, 148, 79)'),
		new Product('Sand Yellow', '70.916', 'rgb(222, 197, 117)'),
		new Product('Oily Steel', '70.865', 'rgb(122, 124, 113)')
	]),
new ColorSet('Skintones Colors (8)', '70.124', 'http://www.acrylicosvallejo.com/en_US/skintones-colors/family/15/13', [
		new Product('Basic Skintone', '70.815', 'rgb(248, 190, 142)'),
		new Product('Sunny Skintone', '70.845', 'rgb(239, 179, 106)'),
		new Product('Medium Fleshtone', '70.860', 'rgb(193, 131, 54)'),
		new Product('Dark Flesh', '70.927', 'rgb(221, 169, 92)'),
		new Product('Light Flesh', '70.928', 'rgb(255, 240, 217)'),
		new Product('Flat Flesh', '70.955', 'rgb(223, 174, 118)'),
		new Product('Rose Brown', '70.803', 'rgb(206, 134, 112)'),
		new Product('Salmon Rose', '70.835', 'rgb(243, 163, 136)')
	]),
new ColorSet('Demag Africa Corps', '70.138', 'http://www.acrylicosvallejo.com/en_US/demag-africa-corps/family/15/111', [
		new Product('Matt Varnish', '70.520', undefined, PRODUCT_CATEGORIES.VARNISH, PRODUCT_RANGES.AUXILIARIES),
		new Product('Black Grey', '70.862', 'rgb(45, 55, 56)'),
		new Product('Gunmetal Grey', '70.863', 'rgb(98, 103, 97)'),
		new Product('Olive Grey', '70.888', 'rgb(57, 85, 71)'),
		new Product('Gunship Green', '70.895', 'rgb(60, 103, 86)'),
		new Product('Dark Yellow', '70.978', 'rgb(163, 148, 79)'),
		new Product('Light Grey', '70.990', 'rgb(158, 161, 154)'),
		new Product('Neutral Grey', '70.992', 'rgb(101, 119, 121)')
	]),
new ColorSet('Demag Rusia 1942', '70.139', 'http://www.acrylicosvallejo.com/en_US/demag-rusia-1942/family/15/112', [
		new Product('Matt Varnish', '70.520', undefined, PRODUCT_CATEGORIES.VARNISH, PRODUCT_RANGES.AUXILIARIES),
		new Product('Red Beige', '70.804', 'rgb(202, 149, 99)'),
		new Product('Red Leather', '70.818', 'rgb(148, 62, 49)'),
		new Product('Black Grey', '70.862', 'rgb(45, 55, 56)'),
		new Product('Green Brown', '70.879', 'rgb(148, 124, 80)'),
		new Product('Blue Grey Pale', '70.905', 'rgb(168, 173, 167)'),
		new Product('Foundation White', '70.919', 'rgb(255, 255, 255)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)')
	]),
new ColorSet('Folkstone Basics', '70.101', 'http://www.acrylicosvallejo.com/en_US/folkstone-basics/family/15/14', [
		new Product('Gold', '70.996', 'rgb(207, 178, 86)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)'),
		new Product('Medium Olive', '70.850', 'rgb(44, 107, 36)'),
		new Product('Bright Orange', '70.851', 'rgb(234, 94, 41)'),
		new Product('Beige Brown', '70.875', 'rgb(121, 89, 64)'),
		new Product('Dark Prussian Blue', '70.899', 'rgb(16, 43, 60)'),
		new Product('Pastel Blue', '70.901', 'rgb(102, 135, 152)'),
		new Product('Carmine Red', '70.908', 'rgb(181, 26, 40)'),
		new Product('Deep Yellow', '70.915', 'rgb(255, 226, 10)'),
		new Product('Red', '70.926', 'rgb(145, 38, 44)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Military Green', '70.975', 'rgb(63, 88, 69)'),
		new Product('Orange Brown', '70.981', 'rgb(184, 108, 58)'),
		new Product('Flat Brown', '70.984', 'rgb(117, 67, 58)'),
		new Product('Sky Grey', '70.989', 'rgb(188, 190, 185)')
	]),
new ColorSet('Folkstone Specialist', '70.102', 'http://www.acrylicosvallejo.com/en_US/folkstone-specialist/family/15/15', [
		new Product('Gloss Varnish', '70.510', undefined, PRODUCT_CATEGORIES.VARNISH, PRODUCT_RANGES.AUXILIARIES),
		new Product('Matt Varnish', '70.520', undefined, PRODUCT_CATEGORIES.VARNISH, PRODUCT_RANGES.AUXILIARIES),
		new Product('Glossy White', '70.842', 'rgb(255, 255, 255)'),
		new Product('Cork Brown', '70.843', 'rgb(167, 121, 88)'),
		new Product('Deep Sky Blue', '70.844', 'rgb(0, 159, 214)'),
		new Product('Sunny Skintone', '70.845', 'rgb(239, 179, 106)'),
		new Product('Mahogany Brown', '70.846', 'rgb(134, 72, 61)'),
		new Product('Dark Sand', '70.847', 'rgb(215, 184, 120)'),
		new Product('Satin Varnish', '70.522', undefined, PRODUCT_CATEGORIES.VARNISH, PRODUCT_RANGES.AUXILIARIES),
		new Product('Ochre Brown', '70.856', 'rgb(174, 117, 38)'),
		new Product('Glossy Black', '70.861', 'rgb(5, 6, 8)'),
		new Product('Chocolate Brown', '70.872', 'rgb(97, 78, 63)'),
		new Product('Foundation White', '70.919', 'rgb(255, 255, 255)'),
		new Product('Dark Sea Grey', '70.991', 'rgb(127, 127, 119)'),
		new Product('Gold', '70.996', 'rgb(207, 178, 86)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)')
	]),
new ColorSet('WWII German', '70.107', 'http://www.acrylicosvallejo.com/en_US/wwii-german/family/15/16', [
		new Product('Brass', '70.801', 'rgb(170, 123, 41)'),
		new Product('German Orange', '70.805', 'rgb(231, 75, 26)'),
		new Product('Lazur Yellow', '70.806', 'rgb(235, 229, 131)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)'),
		new Product('Red Leather', '70.818', 'rgb(148, 62, 49)'),
		new Product('Sunny Skintone', '70.845', 'rgb(239, 179, 106)'),
		new Product('Glossy Black', '70.861', 'rgb(5, 6, 8)'),
		new Product('Dark Seagreen', '70.868', 'rgb(40, 69, 65)'),
		new Product('Leather Brown', '70.871', 'rgb(76, 69, 51)'),
		new Product('Tan Yellow', '70.912', 'rgb(185, 149, 87)'),
		new Product('German Uniform', '70.920', 'rgb(36, 95, 77)'),
		new Product('Dark Red', '70.946', 'rgb(156, 61, 57)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Neutral Grey', '70.992', 'rgb(101, 119, 121)'),
		new Product('German Grey', '70.995', 'rgb(26, 48, 45)')
	]),
new ColorSet('WWII Allied', '70.109', 'http://www.acrylicosvallejo.com/en_US/wwii-allied/family/15/17', [
		new Product('Sand Light', '70.837', 'rgb(214, 199, 156)'),
		new Product('Medium Fleshtone', '70.860', 'rgb(193, 131, 54)'),
		new Product('Gunmetal Grey', '70.863', 'rgb(98, 103, 97)'),
		new Product('Us Field Drab', '70.873', 'rgb(114, 91, 59)'),
		new Product('Tan Earth', '70.874', 'rgb(159, 118, 90)'),
		new Product('U.S.A. Olive Drab', '70.889', 'rgb(62, 71, 66)'),
		new Product('Intermediate Green', '70.891', 'rgb(69, 140, 60)'),
		new Product('Us Dark Green', '70.893', 'rgb(92, 104, 80)'),
		new Product('Cam.  Olive Green', '70.894', 'rgb(60, 84, 70)'),
		new Product('Gunship Green', '70.895', 'rgb(60, 103, 86)'),
		new Product('English Uniform', '70.921', 'rgb(118, 90, 40)'),
		new Product('Uniform Green', '70.922', 'rgb(83, 121, 38)'),
		new Product('Russian Uniform WWII', '70.924', 'rgb(99, 108, 79)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Khaki', '70.988', 'rgb(153, 146, 92)')
	]),
new ColorSet('Napoleonic Colors', '70.110', 'http://www.acrylicosvallejo.com/en_US/napoleonic-colors/family/15/18', [
		new Product('Basic Skintone', '70.815', 'rgb(248, 190, 142)'),
		new Product('Andrea Blue', '70.841', 'rgb(1, 131, 193)'),
		new Product('Bright Orange', '70.851', 'rgb(234, 94, 41)'),
		new Product('Medium Fleshtone', '70.860', 'rgb(193, 131, 54)'),
		new Product('Basalt Grey', '70.869', 'rgb(90, 103, 93)'),
		new Product('Dark Prussian Blue', '70.899', 'rgb(16, 43, 60)'),
		new Product('Deep Yellow', '70.915', 'rgb(255, 226, 10)'),
		new Product('Red', '70.926', 'rgb(145, 38, 44)'),
		new Product('Vermillion', '70.947', 'rgb(190, 22, 37)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Violet', '70.960', 'rgb(72, 44, 95)'),
		new Product('Deep Green', '70.970', 'rgb(4, 101, 58)'),
		new Product('Military Green', '70.975', 'rgb(63, 88, 69)'),
		new Product('Gold', '70.996', 'rgb(207, 178, 86)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)')
	]),
new ColorSet('American Civil War', '70.111', 'http://www.acrylicosvallejo.com/en_US/american-civil-war/family/15/19', [
		new Product('Oxford Blue', '70.807', 'rgb(51, 63, 85)'),
		new Product('Deep Sky Blue', '70.844', 'rgb(0, 159, 214)'),
		new Product('Sunny Skintone', '70.845', 'rgb(239, 179, 106)'),
		new Product('Oily Steel', '70.865', 'rgb(122, 124, 113)'),
		new Product('Goldbrown', '70.877', 'rgb(189, 135, 27)'),
		new Product('Ger. Dark Green', '70.896', 'rgb(47, 80, 71)'),
		new Product('Pale Greyblue', '70.907', 'rgb(202, 214, 210)'),
		new Product('Carmine Red', '70.908', 'rgb(181, 26, 40)'),
		new Product('Blue', '70.925', 'rgb(0, 50, 97)'),
		new Product('Light Flesh', '70.928', 'rgb(255, 240, 217)'),
		new Product('Saddle Brown', '70.940', 'rgb(141, 85, 70)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Flat Yellow', '70.953', 'rgb(254, 208, 26)'),
		new Product('Sky Blue', '70.961', 'rgb(157, 217, 243)'),
		new Product('Light Grey', '70.990', 'rgb(158, 161, 154)')
	]),
new ColorSet('Wargame Special', '70.112', 'http://www.acrylicosvallejo.com/en_US/wargame-special/family/15/20', [
		new Product('Yellow Fluo', '70.730', 'rgb(242, 231, 63)'),
		new Product('Orange Fluo', '70.733', 'rgb(234, 95, 14)'),
		new Product('Magenta Fluo', '70.735', 'rgb(230, 62, 140)'),
		new Product('Blue Fluo', '70.736', 'rgb(0, 112, 176)'),
		new Product('Green Fluo', '70.737', 'rgb(167, 200, 85)'),
		new Product('Violet Blue', '70.811', 'rgb(126, 85, 143)'),
		new Product('Lime Green', '70.827', 'rgb(121, 170, 52)'),
		new Product('Mahogany Brown', '70.846', 'rgb(134, 72, 61)'),
		new Product('Blue Grey Pale', '70.905', 'rgb(168, 173, 167)'),
		new Product('Dark Flesh', '70.927', 'rgb(221, 169, 93)'),
		new Product('Light Flesh', '70.928', 'rgb(255, 240, 217)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Pink', '70.958', 'rgb(215, 116, 147)'),
		new Product('Gold', '70.996', 'rgb(207, 178, 86)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)')
	]),
new ColorSet('American Colonial', '70.147', 'http://www.acrylicosvallejo.com/en_US/american-colonial/family/15/21', [
		new Product('Oxford Blue', '70.807', 'rgb(188, 190, 185)'),
		new Product('Royal Blue', '70.809', 'rgb(55, 78, 130)'),
		new Product('Scarlet', '70.817', 'rgb(209, 33, 36)'),
		new Product('White', '70.820', 'rgb(244, 241, 232)'),
		new Product('Cork Brown', '70.843', 'rgb(167, 121, 88)'),
		new Product('Dark Sand', '70.847', 'rgb(215, 184, 120)'),
		new Product('Chocolate Brown', '70.872', 'rgb(97, 78, 63)'),
		new Product('Dark Prussian Blue', '70.899', 'rgb(16, 43, 60)'),
		new Product('Pale Greyblue', '70.907', 'rgb(202, 214, 210)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('Flat Yellow', '70.953', 'rgb(254, 208, 26)'),
		new Product('Flat Flesh', '70.955', 'rgb(223, 174, 118)'),
		new Product('Flat Red', '70.957', 'rgb(167, 30, 40)'),
		new Product('Buff', '70.976', 'rgb(219, 207, 157)'),
		new Product('Flat Earth', '70.983', 'rgb(133, 95, 50)'),
		new Product('Khaki', '70.988', 'rgb(153, 146, 92)')
	]),
new ColorSet('American Revolution', '70.148', 'http://www.acrylicosvallejo.com/en_US/american-revolution/family/15/22', [
		new Product('Gloss Varnish', '70.510', undefined, PRODUCT_CATEGORIES.VARNISH, PRODUCT_RANGES.AUXILIARIES),
		new Product('Scarlet', '70.817', 'rgb(209, 33, 36)'),
		new Product('Sunny Skintone', '70.845', 'rgb(239, 179, 106)'),
		new Product('Mahogany Brown', '70.846', 'rgb(134, 72, 61)'),
		new Product('Leather Brown', '70.871', 'rgb(76, 69, 51)'),
		new Product('Carmine Red', '70.908', 'rgb(181, 26, 40)'),
		new Product('Deep Yellow', '70.915', 'rgb(255, 226, 10)'),
		new Product('Light Brown', '70.929', 'rgb(191, 114, 68)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Prussian Blue', '70.965', 'rgb(32, 80, 103)'),
		new Product('Flat Green', '70.968', 'rgb(38, 103, 37)'),
		new Product('Deep Green', '70.970', 'rgb(4, 101, 58)'),
		new Product('Buff', '70.976', 'rgb(219, 207, 157)'),
		new Product('Gold', '70.996', 'rgb(207, 178, 84)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 207)')
	]),
new ColorSet('WWII German Camouflage', '70.114', 'http://www.acrylicosvallejo.com/en_US/wwii-german-camouflage/family/15/23', [
		new Product('Brass', '70.801', 'rgb(170, 123, 41)'),
		new Product('Luftwaffe Uniform', '70.816', 'rgb(65, 74, 83)'),
		new Product('German Camouflage Beige WWII', '70.821', 'rgb(165, 147, 109)'),
		new Product('German Camouflage Black Brown', '70.822', 'rgb(91, 54, 36)'),
		new Product('Luftwaffe Camouflage Green', '70.823', 'rgb(87, 105, 57)'),
		new Product('German Camouflage Orange Ochre', '70.824', 'rgb(165, 130, 76)'),
		new Product('German Camouflage Pale Brown', '70.825', 'rgb(131, 104, 83)'),
		new Product('German Camouflage Medium Brown', '70.826', 'rgb(110, 40, 38)'),
		new Product('German Fieldgrey WWII', '70.830', 'rgb(94, 87, 68)'),
		new Product('German Camouflage Light Green', '70.833', 'rgb(84, 133, 54)'),
		new Product('Salmon Rose', '70.835', 'rgb(243, 163, 136)'),
		new Product('Leather Brown', '70.871', 'rgb(76, 69, 51)'),
		new Product('Ger. Dark Green', '70.896', 'rgb(47, 80, 71)'),
		new Product('Field Blue', '70.964', 'rgb(65, 102, 108)'),
		new Product('Park Green Flat', '70.969', 'rgb(0, 128, 79)'),
		new Product('German Camouflage Dark Green', '70.979', 'rgb(43, 73, 63)')
	]),
new ColorSet('Skintones Colors (16)', '70.125', 'http://www.acrylicosvallejo.com/en_US/skintones-colors/family/15/24', [
		new Product('Rose Brown', '70.803', 'rgb(206, 134, 112)'),
		new Product('Basic Skintone', '70.815', 'rgb(248, 190, 142)'),
		new Product('Sunny Skintone', '70.845', 'rgb(239, 179, 106)'),
		new Product('Mahogany Brown', '70.846', 'rgb(134, 72, 61)'),
		new Product('Medium Fleshtone', '70.860', 'rgb(193, 131, 54)'),
		new Product('Dark Prussian Blue', '70.899', 'rgb(16, 43, 60)'),
		new Product('Vermillion', '70.909', 'rgb(207, 26, 35)'),
		new Product('English Uniform', '70.921', 'rgb(118, 90, 40)'),
		new Product('Japan Uniform WWII', '70.923', 'rgb(157, 134, 64)'),
		new Product('Red', '70.926', 'rgb(145, 38, 44)'),
		new Product('Dark Flesh', '70.927', 'rgb(221, 169, 93)'),
		new Product('Light Flesh', '70.928', 'rgb(255, 240, 217)'),
		new Product('Light Brown', '70.929', 'rgb(191, 114, 68)'),
		new Product('Burnt Umber', '70.941', 'rgb(103, 82, 65)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)')
	]),
new ColorSet('Basic Colors U.S.A.', '70.140', 'http://www.acrylicosvallejo.com/en_US/basic-colors-u.s.a./family/15/25', [
		new Product('Reflective Green', '70.890', 'rgb(75, 101, 66)'),
		new Product('Azure', '70.902', 'rgb(110, 127, 171)'),
		new Product('Yellow Ochre', '70.913', 'rgb(202, 153, 61)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Lemon Yellow', '70.952', 'rgb(255, 236, 9)'),
		new Product('Flat Flesh', '70.955', 'rgb(223, 174, 118)'),
		new Product('Clear Orange', '70.956', 'rgb(231, 74, 33)'),
		new Product('Flat Red', '70.957', 'rgb(167, 30, 40)'),
		new Product('Purple', '70.959', 'rgb(132, 72, 100)'),
		new Product('Flat Blue', '70.962', 'rgb(27, 101, 140)'),
		new Product('Flat Green', '70.968', 'rgb(38, 103, 37)'),
		new Product('Buff', '70.976', 'rgb(219, 207, 157)'),
		new Product('Flat Brown', '70.984', 'rgb(117, 67, 58)'),
		new Product('Gold', '70.996', 'rgb(215, 182, 85)'),
		new Product('Silver', '70.997', 'rgb(204, 210, 208)')
	]),
new ColorSet('Earth Colors', '70.141', 'http://www.acrylicosvallejo.com/en_US/earth-colors/family/15/26', [
		new Product('Iraqui Sand', '70.819', 'rgb(190, 160, 110)'),
		new Product('White', '70.820', 'rgb(244, 241, 232)'),
		new Product('Ochre Brown', '70.856', 'rgb(174, 117, 38)'),
		new Product('Beige Brown', '70.875', 'rgb(121, 86, 64)'),
		new Product('Green Brown', '70.879', 'rgb(148, 124, 80)'),
		new Product('Middlestone', '70.882', 'rgb(164, 151, 83)'),
		new Product('Stone Grey', '70.884', 'rgb(157, 157, 123)'),
		new Product('Green Grey', '70.886', 'rgb(137, 125, 87)'),
		new Product('Brown Violet', '70.887', 'rgb(80, 95, 72)'),
		new Product('Light Orange', '70.911', 'rgb(240, 131, 12)'),
		new Product('Sand Yellow', '70.916', 'rgb(222, 197, 117)'),
		new Product('Ivory', '70.918', 'rgb(245, 244, 223)'),
		new Product('Burnt Umber', '70.941', 'rgb(103, 82, 65)'),
		new Product('Deck Tan', '70.986', 'rgb(200, 205, 185)'),
		new Product('Medium Grey', '70.987', 'rgb(154, 159, 127)'),
		new Product('Dark Grey', '70.994', 'rgb(36, 62, 59)')
	]),
new ColorSet('Medieval Colors', '70.142', 'http://www.acrylicosvallejo.com/en_US/medieval-colors/family/15/27', [
		new Product('Green Blue', '70.808', 'rgb(23, 141, 141)'),
		new Product('Royal Blue', '70.809', 'rgb(55, 78, 130)'),
		new Product('Royal Purple', '70.810', 'rgb(76, 37, 94)'),
		new Product('Amaranth Red', '70.829', 'rgb(203, 52, 41)'),
		new Product('Emerlad', '70.838', 'rgb(1, 133, 93)'),
		new Product('Cork Brown', '70.843', 'rgb(167, 121, 88)'),
		new Product('Black Red', '70.859', 'rgb(97, 47, 50)'),
		new Product('Medium Fleshtone', '70.860', 'rgb(193, 131, 54)'),
		new Product('Deep Yellow', '70.915', 'rgb(255, 226, 10)'),
		new Product('Light Green', '70.942', 'rgb(0, 149, 59)'),
		new Product('Vermillion', '70.947', 'rgb(190, 22, 37)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Gold', '70.996', 'rgb(227, 202, 99)'),
		new Product('Silver', '70.997', 'rgb(204, 210, 206)'),
		new Product('Bronze', '70.998', 'rgb(119, 108, 54)')
	]),
new ColorSet('Equestrian Colors', '70.144', 'http://www.acrylicosvallejo.com/en_US/equestrian-colors/family/15/28', [
		new Product('Salmon Rose', '70.835', 'rgb(243, 163, 136)'),
		new Product('London Grey', '70.836', 'rgb(81, 90, 97)'),
		new Product('Black Grey', '70.862', 'rgb(45, 55, 56)'),
		new Product('Leather Brown', '70.871', 'rgb(76, 69, 51)'),
		new Product('Tan Earth', '70.874', 'rgb(159, 118, 90)'),
		new Product('Beige Brown', '70.875', 'rgb(121, 86, 64)'),
		new Product('Silvergrey', '70.883', 'rgb(225, 225, 215)'),
		new Product('Ivory', '70.918', 'rgb(245, 244, 223)'),
		new Product('Saddle Brown', '70.940', 'rgb(141, 85, 70)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Cavalry Brown', '70.982', 'rgb(131, 54, 48)'),
		new Product('Flat Brown', '70.984', 'rgb(117, 67, 58)'),
		new Product('Medium Grey', '70.987', 'rgb(154, 159, 127)'),
		new Product('Neutral Grey', '70.992', 'rgb(101, 119, 121)'),
		new Product('Dark Grey', '70.994', 'rgb(36, 62, 59)')
	]),
new ColorSet('Native Americans', '70.145', 'http://www.acrylicosvallejo.com/en_US/native-americans/family/15/29', [
		new Product('Metal Blue', '70.800', 'rgb(52, 70, 58)'),
		new Product('Red Beige', '70.804', 'rgb(202, 149, 99)'),
		new Product('Violet Red', '70.812', 'rgb(110, 38, 62)'),
		new Product('Burnt Red', '70.814', 'rgb(101, 50, 46)'),
		new Product('Basic Skintone', '70.815', 'rgb(248, 190, 142)'),
		new Product('Dark Sand', '70.847', 'rgb(215, 184, 120)'),
		new Product('Medium Olive', '70.850', 'rgb(44, 107, 36)'),
		new Product('Brown Sand', '70.876', 'rgb(174, 124, 89)'),
		new Product('Pastel Blue', '70.901', 'rgb(102, 135, 152)'),
		new Product('Intermediate Blue', '70.903', 'rgb(95, 124, 128)'),
		new Product('Carmine Red', '70.908', 'rgb(181, 26, 40)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Turquoise', '70.966', 'rgb(0, 129, 148)'),
		new Product('Desert Yellow', '70.977', 'rgb(180, 144, 66)'),
		new Product('Silver', '70.997', 'rgb(204, 210, 206)')
	]),
new ColorSet('Naval (Steam Era)', '70.146', 'http://www.acrylicosvallejo.com/en_US/naval-(steam-era)/family/15/30', [
		new Product('Brass', '70.801', 'rgb(170, 123, 41)'),
		new Product('White', '70.820', 'rgb(244, 241, 232)'),
		new Product('Black Grey', '70.862', 'rgb(45, 55, 56)'),
		new Product('Pale Greyblue', '70.907', 'rgb(202, 214, 210)'),
		new Product('Light Orange', '70.911', 'rgb(240, 131, 12)'),
		new Product('Yellow Ochre', '70.913', 'rgb(202, 153, 61)'),
		new Product('Sand Yellow', '70.916', 'rgb(222, 197, 117)'),
		new Product('Red', '70.926', 'rgb(145, 38, 44)'),
		new Product('Dark Blue', '70.930', 'rgb(7, 82, 124)'),
		new Product('Burnt Umber', '70.941', 'rgb(103, 82, 65)'),
		new Product('Amarillo Dorado', '70.948', 'rgb(249, 199, 86)'),
		new Product('Sky Blue', '70.961', 'rgb(157, 217, 243)'),
		new Product('Deep Green', '70.970', 'rgb(4, 101, 58)'),
		new Product('Green Sky', '70.974', 'rgb(101, 170, 123)'),
		new Product('Hull Red', '70.985', 'rgb(78, 40, 31)'),
		new Product('Sky Grey', '70.989', 'rgb(188, 190, 185)')
	]),
new ColorSet('Imperial Roman', '70.143', 'http://www.acrylicosvallejo.com/en_US/imperial-roman/family/15/128', [
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Black', '70.950', 'rgb(0, 0, 0)'),
		new Product('Flat Flesh', '70.955', 'rgb(222, 174, 120)'),
		new Product('Mahogany Brown', '70.846', 'rgb(132, 71, 60)'),
		new Product('Silver', '70.997', 'rgb(205, 211, 208)'),
		new Product('Gold', '70.996', 'rgb(217, 185, 92)'),
		new Product('Brass', '70.801', 'rgb(171, 124, 42)'),
		new Product('Bronze', '70.998', 'rgb(119, 107, 53)'),
		new Product('Royal Purple', '70.810', 'rgb(77, 38, 95)'),
		new Product('Flat Red', '70.957', 'rgb(167, 31, 40)'),
		new Product('Blue', '70.925', 'rgb(4, 51, 96)'),
		new Product('Leather Brown', '70.871', 'rgb(76, 68, 51)'),
		new Product('Flat Green', '70.968', 'rgb(42, 101, 41)'),
		new Product('Deep Yellow', '70.915', 'rgb(255, 226, 8)'),
		new Product('Carmine Red', '70.908', 'rgb(142, 21, 29)'),
		new Product('Turquoise', '70.966', 'rgb(0, 130, 148)')
	]),
new ColorSet('US Infantry Paint Set', '70.160', 'http://www.acrylicosvallejo.com/en_US/us-infantry-paint-set/family/15/141', [
		new Product('Brown Violet', '70.887', 'rgb(95, 89, 72)'),
		new Product('Khaki', '70.988', 'rgb(133, 120, 92)'),
		new Product('Green Grey', '70.886', 'rgb(118, 117, 105)'),
		new Product('US Field Drab', '70.873', 'rgb(124, 102, 78)'),
		new Product('Tan Earth', '70.874', 'rgb(143, 116, 91)'),
		new Product('Red Leather', '70.818', 'rgb(143, 87, 65)')
	]),
new ColorSet('German SS Paint Set', '70.158', 'http://www.acrylicosvallejo.com/en_US/german-ss-paint-set/family/15/144', [
		new Product('German Camouflage Orange Ochre', '70.824', 'rgb(164, 127, 76)'),
		new Product('German Camouflage Light Green', '70.833', 'rgb(93, 112, 76)'),
		new Product('German Camouflage Dark Green', '70.979', 'rgb(74, 76, 70)'),
		new Product('German Camouflage Pale Brown', '70.825', 'rgb(131, 105, 84)'),
		new Product('German Camouflage Black Brown', '70.822', 'rgb(72, 67, 65)'),
		new Product('Light Brown', '70.929', 'rgb(191, 115, 68)')
	]),
new ColorSet('British Paint Set', '70.153', 'http://www.acrylicosvallejo.com/en_US/british-paint-set/family/15/145', [
		new Product('Russian Uniform WWII', '70.924', 'rgb(104, 99, 78)'),
		new Product('Khaki', '70.988', 'rgb(133, 120, 92)'),
		new Product('English Uniform', '70.921', 'rgb(114, 93, 64)'),
		new Product('Green Ochre', '70.914', 'rgb(176, 142, 95)'),
		new Product('Refractive Green', '70.890', 'rgb(85, 86, 67)'),
		new Product('Flat Earth', '70.983', 'rgb(113, 86, 60)')
	]),
new ColorSet('German Infantry Paint Set', '70.154', 'http://www.acrylicosvallejo.com/en_US/german-infantry-paint-set/family/15/146', [
		new Product('German Camouflage Dark Green', '70.979', 'rgb(74, 76, 70)'),
		new Product('German Camouflage Beige WWII', '70.821', 'rgb(135, 133, 110)'),
		new Product('German Camouflage Medium Brown', '70.826', 'rgb(98, 82, 64)'),
		new Product('Luftwaffe Camouflage Green', '70.823', 'rgb(69, 78, 59)'),
		new Product('Green Grey', '70.886', 'rgb(118, 117, 105)'),
		new Product('German Fieldgrey WWII', '70.830', 'rgb(95, 95, 86)')
	]),
new ColorSet('German Armour Paint Set', '70.155', 'http://www.acrylicosvallejo.com/en_US/german-armour-paint-set/family/15/147', [
		new Product('Middlestone', '70.882', 'rgb(147, 126, 78)'),
		new Product('Refractive Green', '70.890', 'rgb(85, 86, 67)'),
		new Product('Chocolate Brown', '70.872', 'rgb(114, 93, 64)'),
		new Product('German Grey', '70.995', 'rgb(68, 71, 77)'),
		new Product('Track Primer', '70.304', 'rgb(88, 75, 62)'),
		new Product('Ivory', '70.918', 'rgb(243, 239, 211)')
	]),
new ColorSet('Infantry Basic Paint Set', '70.156', 'http://www.acrylicosvallejo.com/en_US/infantry-basic-paint-set/family/15/148', [
		new Product('Flat Flesh', '70.955', 'rgb(224, 166, 125)'),
		new Product('Beige Brown', '70.875', 'rgb(145, 119, 95)'),
		new Product('Gunmetal Grey', '70.863', 'rgb(97, 103, 97)'),
		new Product('Black Grey', '70.862', 'rgb(70, 74, 76)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)'),
		new Product('Deep Yellow', '70.915', 'rgb(255, 226, 9)'),
		new Product('Flat Red', '70.957', 'rgb(166, 59, 57)'),
		new Product('Dark Blue', '70.930', 'rgb(50, 97, 153)')
	]),
new ColorSet('Vehicle Basic Paint Set', '70.157', 'http://www.acrylicosvallejo.com/en_US/vehicle-basic-paint-set/family/15/149', [
		new Product('Brass', '70.801', 'rgb(150, 111, 47)'),
		new Product('Gunmetal Grey', '70.863', 'rgb(97, 103, 97)'),
		new Product('Track Primer', '70.304', 'rgb(88, 75, 62)'),
		new Product('Dark Rubber', '70.306', 'rgb(80, 83, 83)'),
		new Product('New Wood', '70.311', 'rgb(167, 99, 59)'),
		new Product('Canvas', '70.314', 'rgb(100, 89, 52)'),
		new Product('Sepia Wash', '73.200', 'rgb(136, 89, 21)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR),
		new Product('Black Wash', '73.201', 'rgb(0, 0, 0)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR)
	]),
new ColorSet('Waffen Camouflage Set', '70.180', 'http://www.acrylicosvallejo.com/en_US/waffen-camouflage-set/family/15/150', [
		new Product('Cam. SS Middle Brown', '70.740', 'rgb(87, 68, 61)'),
		new Product('Cam. SS Dark Black Green', '70.741', 'rgb(0, 36, 24)'),
		new Product('Saddle Brown', '70.940', 'rgb(114, 85, 78)'),
		new Product('Olive Green', '70.967', 'rgb(95, 109, 68)'),
		new Product('Chocolate Brown', '70.872', 'rgb(86, 76, 64)'),
		new Product('Sunny Skintone', '70.845', 'rgb(235, 174, 118)'),
		new Product('Orange Brown', '70.981', 'rgb(184, 108, 57)'),
		new Product('German Camouflage Black Brown', '70.822', 'rgb(72, 67, 65)')
	]),
new ColorSet('German Field Grey', '70.181', 'http://www.acrylicosvallejo.com/en_US/german-field-grey/family/15/151', [
		new Product('German Fieldgrey WWII', '70.830', 'rgb(95, 95, 86)'),
		new Product('VBronce Green', '70.897', 'rgb(79, 83, 81)'),
		new Product('Yellow Olive', '70.892', 'rgb(36, 57, 43)'),
		new Product('Dark Seagreen', '70.868', 'rgb(83, 87, 97)'),
		new Product('Sunny Skintone', '70.845', 'rgb(235, 174, 118)'),
		new Product('Pastel Green', '70.885', 'rgb(166, 168, 146)'),
		new Product('Blue Grey Pale', '70.905', 'rgb(129, 139, 144)'),
		new Product('Black', '70.950', 'rgb(0, 0, 0)')
	]),
new ColorSet('Face Painting Set', '70.119', 'http://www.acrylicosvallejo.com/en_US/face-painting-set/family/15/31', [
		new Product('Red Beige', '70.804', 'rgb(202, 149, 99)'),
		new Product('Violet Red', '70.812', 'rgb(110, 38, 62)'),
		new Product('Burnt Red', '70.814', 'rgb(101, 50, 46)'),
		new Product('Basic Skintone', '70.815', 'rgb(248, 190, 142)'),
		new Product('Black Red', '70.859', 'rgb(97, 47, 50)'),
		new Product('Brown Sand', '70.876', 'rgb(174, 124, 89)'),
		new Product('Light Flesh', '70.928', 'rgb(255, 240, 217)'),
		new Product('Black', '70.950', 'rgb(25, 23, 28)')
	]),
new ColorSet('Winter weathering set', '72.220', 'http://www.acrylicosvallejo.com/en_US/winter-weathering-set/family/15/33', [
		new Product('Red Leather', '70.818', 'rgb(143, 87, 65)'),
		new Product('Gunmetal Grey', '70.863', 'rgb(97, 103, 97)'),
		new Product('Basalt Grey', '70.869', 'rgb(8, 122, 90)'),
		new Product('Chocolate Brown', '70.872', 'rgb(86, 76, 64)'),
		new Product('Tan Earth', '70.874', 'rgb(143, 116, 91)'),
		new Product('Foundation White', '70.919', 'rgb(255, 255, 255)'),
		new Product('Black', '70.950', 'rgb(0, 0, 0)'),
		new Product('Sepia Wash', '73.200', 'rgb(136, 89, 21)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR),
		new Product('Sandy Paste', '26.232', 'rgb(221, 220, 215)')
	]),
new ColorSet('Black & White', '70.151', 'http://www.acrylicosvallejo.com/en_US/black-_-white/family/15/127', [
		new Product('Black', '70.950', 'rgb(0, 0, 0)'),
		new Product('Dark Grey', '70.994', 'rgb(76, 81, 86)'),
		new Product('Neutral Grey', '70.992', 'rgb(106, 112, 120)'),
		new Product('Flat Earth', '70.983', 'rgb(113, 86, 60)'),
		new Product('German Camouflage Beige WWII', '70.821', 'rgb(135, 133, 110)'),
		new Product('Deck Tan', '70.986', 'rgb(199, 205, 184)'),
		new Product('Ivory', '70.918', 'rgb(243, 239, 211)'),
		new Product('White', '70.951', 'rgb(255, 255, 255)')
	]),
new ColorSet('Wood & Leather', '70.182', 'http://www.acrylicosvallejo.com/en_US/wood-_-leather/family/15/152', [
		new Product('Dark Sand', '70.847', 'rgb(208, 177, 131)'),
		new Product('Japan Uniform WWII', '70.923', 'rgb(157, 123, 60)'),
		new Product('Orange Brown', '70.981', 'rgb(184, 108, 57)'),
		new Product('Flat Earth', '70.983', 'rgb(113, 86, 60)'),
		new Product('Chocolate Brown', '70.872', 'rgb(86, 76, 64)'),
		new Product('Wookgrain', '70.828', 'rgb(76, 60, 52)'),
		new Product('Smoke', '70.939', 'rgb(68, 63, 56)'),
		new Product('Black', '70.950', 'rgb(0, 0, 0)')
	]),
new ColorSet('Rust, Stain & Streaking', '70.183', 'http://www.acrylicosvallejo.com/en_US/rust_-stain-_-streaking/family/15/153', [
		new Product('Chocolate Brown', '70.872', 'rgb(86, 76, 64)'),
		new Product('German Camouflage Black Brown', '70.822', 'rgb(72, 67, 65)'),
		new Product('Orange Brown', '70.981', 'rgb(184, 108, 57)'),
		new Product('Chocolate Brown', '70.872', 'rgb(86, 76, 64)'),
		new Product('Light Rust', '70.301', 'rgb(136, 57, 40)'),
		new Product('Dark Rust', '70.302', 'rgb(52, 45, 40)'),
		new Product('Orange Rust', '71.130', 'rgb(195, 98, 45)', PRODUCT_CATEGORIES.PAINT, PRODUCT_RANGES.MODEL_AIR),
		new Product('Wood', '71.077', 'rgb(164, 112, 54)', PRODUCT_CATEGORIES.PAINT, PRODUCT_RANGES.MODEL_AIR),
		new Product('Light Rust Wash', '76.505', 'rgb(234, 122, 27)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.MODEL_WASH)
	]),
new ColorSet('Rust and Steel Effects', '70.150', 'http://www.acrylicosvallejo.com/en_US/rust-and-steel-effects/family/15/126', [
		new Product('Gunmetal Grey', '70.863', 'rgb(97, 103, 97)'),
		new Product('Basalt Grey', '70.869', 'rgb(8, 122, 90)'),
		new Product('Burnt Umber', '70.941', 'rgb(103, 81, 65)'),
		new Product('Saddle Brown', '70.940', 'rgb(114, 85, 78)'),
		new Product('Red Leather', '70.818', 'rgb(143, 87, 65)'),
		new Product('Orange Brown', '70.981', 'rgb(184, 108, 57)'),
		new Product('Clear Orange', '70.956', 'rgb(200, 77, 54)'),
		new Product('Sepia Wash', '73.200', 'rgb(136, 89, 21)', PRODUCT_CATEGORIES.WASH, PRODUCT_RANGES.GAME_COLOR),
		new Product('Brown Iron Oxide Pigment', '73.108', 'rgb(140, 64, 61)', PRODUCT_CATEGORIES.PIGMENT, PRODUCT_RANGES.PIGMENTS)
	])
]