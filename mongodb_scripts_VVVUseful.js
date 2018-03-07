db.originalTrainingData.distinct('ncodpers')//956645
outcome = db.originalTrainingData.find({},{ncodpers:1,_id:0}).limit(5)
db.originalTrainingData.aggregate([{$match: {ncodpers: 1375586}}])//17

db.originalTrainingData.aggregate([{$match: {ncodpers: {$in: [1375586,1050611,1050612,1050613,1050614]}}}])

db.originalTrainingData.aggregate([{$project:{ncodpers:1, fecha_dato:1}},
{$match: {ncodpers: {$in: [1375586,1050611,1050612,1050613,1050614]}}}])

db.originalTrainingData.aggregate([
{$project:{ncodpers:1, fecha_dato:1}},
{$match: {ncodpers: {$in: [1375586,1050611,1050612,1050613,1050614]}}},
{$group: {
    _id: '$ncodpers',
    total_docs_in_coll: {$sum:1}
         }}
])

db.originalTrainingData.aggregate([
{$match: {ncodpers: {$in: [1375586,1050611,1050612,1050613,1050614]}}},
{$group: {_id: {ncodpers:'$ncodpers',fecha_dato:'$fecha_dato'},
          count: {$sum:1}
         }}
])
         
db.originalTrainingData.aggregate([
//{$match: {ncodpers: {$in: [1375586,1050611,1050612,1050613,1050614]}}},
//{$limit: 1000},
{$sort:{fecha_dato:1}},
{$group: {_id: '$ncodpers',
          fecha_dato: {$last:'$fecha_dato'},          
          ind_empleado: {$last: '$ind_empleado'},
          pais_residencia: {$last: '$pais_residencia'},
          sexo: {$last: '$sexo'},	
          age: {$last: '$age'},			
          fecha_alta	: {$last: '$fecha_alta'},		
          ind_nuevo	: {$last: '$ind_nuevo'},		
          antiguedad: {$last: '$antiguedad'},		
          indrel: {$last: '$indrel'},				
          ult_fec_cli_1t: {$last: '$ult_fec_cli_1t'},	
          indrel_1mes: {$last: '$indrel_1mes'},
          tiprel_1mes: {$last: '$tiprel_1mes'},	
          indresi: {$last: '$indresi'},		
          indext: {$last: '$indext'},		
          conyuemp: {$last: '$conyuemp'},	
          canal_entrada: {$last: '$canal_entrada'},
          indfall: {$last: '$indfall'},		
          tipodom: {$last: '$tipodom'},			
          cod_prov: {$last: '$cod_prov'},	
          nomprov: {$last: '$nomprov'},	
          ind_actividad_cliente: {$last: '$ind_actividad_cliente'},
          renta:{$last: '$renta'},
          segmento:{$last: '$segmento'},          
          ind_ahor_fin_ult1: {$last: '$ind_ahor_fin_ult1'},
          ind_aval_fin_ult1: {$last: '$ind_aval_fin_ult1'},
          ind_cco_fin_ult1: {$last: '$ind_cco_fin_ult1'},
          ind_cder_fin_ult1: {$last: '$ind_cder_fin_ult1'},
          ind_cno_fin_ult1: {$last: '$ind_cno_fin_ult1'},
          ind_ctju_fin_ult1: {$last: '$ind_ctju_fin_ult1'},
          ind_ctma_fin_ult1: {$last: '$ind_ctma_fin_ult1'},
          ind_ctop_fin_ult1: {$last: '$ind_ctop_fin_ult1'},
          ind_ctpp_fin_ult1: {$last: '$ind_ctpp_fin_ult1'},
          ind_deco_fin_ult1: {$last: '$ind_deco_fin_ult1'},
          ind_deme_fin_ult1: {$last: '$ind_deme_fin_ult1'},
          ind_dela_fin_ult1: {$last: '$ind_dela_fin_ult1'},
          ind_ecue_fin_ult1: {$last: '$ind_ecue_fin_ult1'},
          ind_fond_fin_ult1: {$last: '$ind_fond_fin_ult1'},
          ind_hip_fin_ult1: {$last: '$ind_hip_fin_ult1'},
          ind_plan_fin_ult1: {$last: '$ind_plan_fin_ult1'},
          ind_pres_fin_ult1: {$last: '$ind_pres_fin_ult1'},
          ind_reca_fin_ult1: {$last: '$ind_reca_fin_ult1'},
          ind_tjcr_fin_ult1: {$last: '$ind_tjcr_fin_ult1'},
          ind_valo_fin_ult1: {$last: '$ind_valo_fin_ult1'},
          ind_viv_fin_ult1: {$last: '$ind_viv_fin_ult1'},
          ind_nomina_ult1: {$last: '$ind_nomina_ult1'},
          ind_nom_pens_ult1: {$last: '$ind_nom_pens_ult1'},
          ind_recibo_ult1: {$last: '$ind_recibo_ult1'},
          productSum:{$last : '$productSum'},      
         }},
{ $out : "allLatestUniqueClients" }
],
{allowDiskUse :true}//For Sorting
)
         
//assert        
db.originalTrainingData.aggregate([//{$project:{ncodpers:1, fecha_dato:1}},
                                   {$match: {ncodpers: 1375586}},//2016-05-28 MaxDate
                                   {$limit: 100},
                                   {$sort:{fecha_dato:1}}, //2015-01-28 MinDate
                                   ])

