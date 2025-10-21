var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ItaipuPARQUETEC_1 = new ol.format.GeoJSON();
var features_ItaipuPARQUETEC_1 = format_ItaipuPARQUETEC_1.readFeatures(json_ItaipuPARQUETEC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ItaipuPARQUETEC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ItaipuPARQUETEC_1.addFeatures(features_ItaipuPARQUETEC_1);
var lyr_ItaipuPARQUETEC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ItaipuPARQUETEC_1, 
                style: style_ItaipuPARQUETEC_1,
                popuplayertitle: 'Itaipu PARQUETEC',
                interactive: true,
    title: 'Itaipu PARQUETEC<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_0.png" /> Acadêmico<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_1.png" /> Administrativo<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_2.png" /> Atend. Individualizado<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_3.png" /> CORREGEDORIA<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_4.png" /> Auditório<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_5.png" /> Biblioteca<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_6.png" /> Circulação<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_7.png" /> Convivência<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_8.png" /> Copa – Cozinha – Cantina<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_9.png" /> Depósito<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_10.png" /> Dormitório<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_11.png" /> Esporte<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_12.png" /> Extensão<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_13.png" /> Lab. de Informática<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_14.png" /> Laboratório – Ensino<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_15.png" /> Laboratório – Pesquisa<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_16.png" /> Laboratório – Prática<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_17.png" /> Monitoria<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_18.png" /> Restaurante<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_19.png" /> Reunião<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_20.png" /> Sala de aula<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_21.png" /> Sala de aula (Pós)<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_22.png" /> Sala de estudo<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_23.png" /> Sala de Professores<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_24.png" /> Sala Técnica<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_25.png" /> Sanitários<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_26.png" /> Saúde<br />\
    <img src="styles/legend/ItaipuPARQUETEC_1_27.png" /> <br />' });
var format_Prdios_2 = new ol.format.GeoJSON();
var features_Prdios_2 = format_Prdios_2.readFeatures(json_Prdios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prdios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prdios_2.addFeatures(features_Prdios_2);
var lyr_Prdios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prdios_2, 
                style: style_Prdios_2,
                popuplayertitle: 'Prédios',
                interactive: true,
                title: '<img src="styles/legend/Prdios_2.png" /> Prédios'
            });
var format_terreno_3 = new ol.format.GeoJSON();
var features_terreno_3 = format_terreno_3.readFeatures(json_terreno_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_terreno_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terreno_3.addFeatures(features_terreno_3);
var lyr_terreno_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terreno_3, 
                style: style_terreno_3,
                popuplayertitle: 'terreno',
                interactive: true,
                title: '<img src="styles/legend/terreno_3.png" /> terreno'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ItaipuPARQUETEC_1.setVisible(true);lyr_Prdios_2.setVisible(true);lyr_terreno_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ItaipuPARQUETEC_1,lyr_Prdios_2,lyr_terreno_3];
lyr_ItaipuPARQUETEC_1.set('fieldAliases', {'ID': 'ID', 'pti-geral_SALA': 'SALA', 'pti-geral_DESCRICAO': 'DESCRICAO', 'pti-geral_AREA': 'AREA', 'pti-geral_CAPACIDADE': 'CAPACIDADE', 'pti-geral_USO': 'USO', 'pti-geral_SETOR': 'SETOR', 'pti-geral_RESPONSAVEL': 'RESPONSAVEL', });
lyr_Prdios_2.set('fieldAliases', {'id': 'id', 'nome': 'Prédio', 'url': 'Mais info', });
lyr_terreno_3.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_ItaipuPARQUETEC_1.set('fieldImages', {'ID': 'TextEdit', 'pti-geral_SALA': 'TextEdit', 'pti-geral_DESCRICAO': 'TextEdit', 'pti-geral_AREA': 'TextEdit', 'pti-geral_CAPACIDADE': 'Range', 'pti-geral_USO': 'TextEdit', 'pti-geral_SETOR': 'TextEdit', 'pti-geral_RESPONSAVEL': 'TextEdit', });
lyr_Prdios_2.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'url': 'TextEdit', });
lyr_terreno_3.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_ItaipuPARQUETEC_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'pti-geral_SALA': 'inline label - visible with data', 'pti-geral_DESCRICAO': 'inline label - visible with data', 'pti-geral_AREA': 'inline label - visible with data', 'pti-geral_CAPACIDADE': 'inline label - visible with data', 'pti-geral_USO': 'inline label - visible with data', 'pti-geral_SETOR': 'inline label - visible with data', 'pti-geral_RESPONSAVEL': 'inline label - visible with data', });
lyr_Prdios_2.set('fieldLabels', {'id': 'no label', 'nome': 'inline label - visible with data', 'url': 'inline label - visible with data', });
lyr_terreno_3.set('fieldLabels', {'id': 'hidden field', 'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', });
lyr_terreno_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});