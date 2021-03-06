# python imports
import mongoengine as me

# project imports
from models.default_values import uuid_value
from models.shared.base_mixin import BaseMixin


class BlockModel(BaseMixin, me.Document):
    '''
    Blocks
    '''
    
    block_id = me.StringField(primary_key=True, default=uuid_value)
    block_number = me.StringField()
    title = me.StringField()
    block_in_stage = me.IntField()
    stage = me.StringField(required=True)

    meta = {'collection': 'blocks'}