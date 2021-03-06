# python imports

# project imports
from models.stages import StageModel


# records to insert
stages = [
    {
        'stage': 'N',
        'stage_name': 'Navigation'
    }
]

# function to insert
def insert_stages():

    # delete records (if any)
    StageModel.objects().delete()

    # loop through records
    for stage in stages:
        # create record
        stage_model = StageModel(**stage)
        # insert record
        stage_model.save()