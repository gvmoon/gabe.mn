from datetime import datetime
from gabe_mn.contexts.api.root import ApiRootContext
from pyramid.view import view_config, view_defaults


@view_defaults(context=ApiRootContext, name='copyright')
class CopyrightViews(object):
    COPYRIGHT_START_YEAR = 2017

    def __init__(self, context, request):
        self.context = context
        self.request = request

    @view_config(
        renderer='json',
        request_method='GET'
    )
    def get(self):
        return {
            'start': self.COPYRIGHT_START_YEAR,
            'end': datetime.now().year
        }
