from gabe_mn.contexts.context import Context


class ApiRootContext(Context):
    __name__ = 'api'

    def __init__(self, parent):
        self.__parent__ = parent
