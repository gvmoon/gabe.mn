from gabe_mn.contexts.root import RootContext
from pyramid.view import view_config, view_defaults


@view_defaults(context=RootContext, route_name='app')
class IndexViews(object):
    def __init__(self, context, request):
        self.context = context
        self.request = request

    @view_config(
        renderer='templates/index.jinja2',
        request_method='GET'
    )
    def get(self):
        return {}
