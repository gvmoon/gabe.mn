from gabe_mn.contexts.root import RootContext
from pyramid.view import view_config, view_defaults


@view_defaults(context=RootContext)
class IndexViews(object):
    def __init__(self, context, request):
        self.context = context
        self.request = request

    @view_config(
        request_method='GET',
        renderer='templates/index.jinja2'
    )
    def get(self):
        return {}
