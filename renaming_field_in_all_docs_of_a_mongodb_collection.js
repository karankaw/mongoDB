//https://docs.mongodb.com/manual/reference/operator/update/rename/

/**
The $rename operator updates the name of a field and has the following form:

{$rename: { <field1>: <newName1>, <field2>: <newName2>, ... } }

The new field name must differ from the existing field name. To specify a <field> in an embedded document, use dot notation.
*/

db.students.update( 
{ _id: 1 }, 
{ $rename: { 'nickname': 'alias', 'cell': 'mobile' }} , 
{
upsert:false, //upsert means if none found then insert new document
multi:true} //multi appplies to all, default false
)

//https://docs.mongodb.com/manual/reference/method/db.collection.update/
//https://specify.io/how-tos/mongodb-update-documents

db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ]
   }
)

//--------------------------------------------------------------------------------------------------------


db.allLatestUniqueClients.update(
{},
{$rename:
{
'ind_ahor_fin_ult1': 'Saving_Account',						
'ind_aval_fin_ult1': 'Guarantees',                             
'ind_cco_fin_ult1': 'Current_Accounts',                   
'ind_cder_fin_ult1': 'Derivada_Account',                 
'ind_cno_fin_ult1': 'Payroll_Account',                      
'ind_ctju_fin_ult1': 'Junior_Account',                      
'ind_ctma_fin_ult1': 'Más_Particular_Account',      
'ind_ctop_fin_ult1': 'Particular_Account',                
'ind_ctpp_fin_ult1': 'Particular_Plus_Account',       
'ind_deco_fin_ult1': 'ShortTerm_Deposits',             
'ind_deme_fin_ult1': 'MediumTerm_Deposits',       
'ind_dela_fin_ult1': 'LongTerm_Deposits',               
'ind_ecue_fin_ult1': 'e-Account',                              
'ind_fond_fin_ult1': 'Funds',                                     
'ind_hip_fin_ult1': 'Mortgage',                                  
'ind_plan_fin_ult1': 'Other_Pensions',                     
'ind_pres_fin_ult1': 'Loans',                                      
'ind_reca_fin_ult1': 'Taxes',                                      
'ind_tjcr_fin_ult1': 'Credit_Card',                             
'ind_valo_fin_ult1': 'Securities',                               
'ind_viv_fin_ult1': 'Home_Account',                         
'ind_nomina_ult1': 'Payroll',                                     
'ind_nom_pens_ult1': 'Salary_Pensions',                 
'ind_recibo_ult1': 'Direct_Debit'                               
}},
{multi:true}
)




