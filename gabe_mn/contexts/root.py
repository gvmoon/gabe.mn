from gabe_mn.contexts.context import Context
from gabe_mn.contexts.api.root import ApiRootContext


class RootContext(Context):
    __name = ''
    __parent__ = None

    def __init__(self):
        self['api'] = ApiRootContext(self)
