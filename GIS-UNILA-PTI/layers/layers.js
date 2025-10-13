var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ptigeral_1 = new ol.format.GeoJSON();
var features_ptigeral_1 = format_ptigeral_1.readFeatures(json_ptigeral_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptigeral_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptigeral_1.addFeatures(features_ptigeral_1);
var lyr_ptigeral_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ptigeral_1, 
                style: style_ptigeral_1,
                popuplayertitle: 'pti-geral',
                interactive: true,
    title: 'pti-geral<br />\
    <img src="styles/legend/ptigeral_1_0.png" /> AUDIN<br />\
    <img src="styles/legend/ptigeral_1_1.png" /> BIUNILA<br />\
    <img src="styles/legend/ptigeral_1_2.png" /> COMPARTILHADO<br />\
    <img src="styles/legend/ptigeral_1_3.png" /> CORREGEDORIA<br />\
    <img src="styles/legend/ptigeral_1_4.png" /> EaD<br />\
    <img src="styles/legend/ptigeral_1_5.png" /> EdUNILA<br />\
    <img src="styles/legend/ptigeral_1_6.png" /> ILAACH<br />\
    <img src="styles/legend/ptigeral_1_7.png" /> ILACVN<br />\
    <img src="styles/legend/ptigeral_1_8.png" /> ILACVN/ILATIT<br />\
    <img src="styles/legend/ptigeral_1_9.png" /> ILAESP<br />\
    <img src="styles/legend/ptigeral_1_10.png" /> ILATIT<br />\
    <img src="styles/legend/ptigeral_1_11.png" /> IMEA<br />\
    <img src="styles/legend/ptigeral_1_12.png" /> OUVIDORIA<br />\
    <img src="styles/legend/ptigeral_1_13.png" /> PPGIES<br />\
    <img src="styles/legend/ptigeral_1_14.png" /> PRAE<br />\
    <img src="styles/legend/ptigeral_1_15.png" /> PROAGI<br />\
    <img src="styles/legend/ptigeral_1_16.png" /> PROCURADORIA<br />\
    <img src="styles/legend/ptigeral_1_17.png" /> PROEX<br />\
    <img src="styles/legend/ptigeral_1_18.png" /> PROGEPE<br />\
    <img src="styles/legend/ptigeral_1_19.png" /> PROGRAD<br />\
    <img src="styles/legend/ptigeral_1_20.png" /> PROINT<br />\
    <img src="styles/legend/ptigeral_1_21.png" /> PROPLAN<br />\
    <img src="styles/legend/ptigeral_1_22.png" /> PRPPG<br />\
    <img src="styles/legend/ptigeral_1_23.png" /> PRU<br />\
    <img src="styles/legend/ptigeral_1_24.png" /> REITORIA<br />\
    <img src="styles/legend/ptigeral_1_25.png" /> SACT<br />\
    <img src="styles/legend/ptigeral_1_26.png" /> SECAFE<br />\
    <img src="styles/legend/ptigeral_1_27.png" /> SECOM<br />\
    <img src="styles/legend/ptigeral_1_28.png" /> Uso comum<br />\
    <img src="styles/legend/ptigeral_1_29.png" /> <br />' });
var format_limites_2 = new ol.format.GeoJSON();
var features_limites_2 = format_limites_2.readFeatures(json_limites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_2.addFeatures(features_limites_2);
var lyr_limites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limites_2, 
                style: style_limites_2,
                popuplayertitle: 'limites',
                interactive: false,
                title: '<img src="styles/legend/limites_2.png" /> limites'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ptigeral_1.setVisible(true);lyr_limites_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ptigeral_1,lyr_limites_2];
lyr_ptigeral_1.set('fieldAliases', {'ID': 'ID', 'pti-geral_SALA': 'SALA', 'pti-geral_DESCRICAO': 'DESCRICAO', 'pti-geral_AREA': 'AREA', 'pti-geral_CAPACIDADE': 'CAPACIDADE', 'pti-geral_USO': 'USO', 'pti-geral_SETOR': 'SETOR', 'pti-geral_RESPONSAVEL': 'RESPONSAVEL', });
lyr_limites_2.set('fieldAliases', {'ID': 'ID', });
lyr_ptigeral_1.set('fieldImages', {'ID': 'TextEdit', 'pti-geral_SALA': 'TextEdit', 'pti-geral_DESCRICAO': 'TextEdit', 'pti-geral_AREA': 'TextEdit', 'pti-geral_CAPACIDADE': 'Range', 'pti-geral_USO': 'TextEdit', 'pti-geral_SETOR': 'TextEdit', 'pti-geral_RESPONSAVEL': 'TextEdit', });
lyr_limites_2.set('fieldImages', {'ID': '', });
lyr_ptigeral_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'pti-geral_SALA': 'inline label - visible with data', 'pti-geral_DESCRICAO': 'inline label - visible with data', 'pti-geral_AREA': 'inline label - visible with data', 'pti-geral_CAPACIDADE': 'inline label - visible with data', 'pti-geral_USO': 'inline label - visible with data', 'pti-geral_SETOR': 'inline label - visible with data', 'pti-geral_RESPONSAVEL': 'inline label - visible with data', });
lyr_limites_2.set('fieldLabels', {'ID': 'inline label - visible with data', });
lyr_limites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});