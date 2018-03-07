//https://docs.mongodb.com/manual/reference/operator/update/rename/

/**
The $rename operator updates the name of a field and has the following form:

{$rename: { <field1>: <newName1>, <field2>: <newName2>, ... } }

The new field name must differ from the existing field name. To specify a <field> in an embedded document, use dot notation.
*/

db.students.update( { _id: 1 }, { $rename: { 'nickname': 'alias', 'cell': 'mobile' } } 




