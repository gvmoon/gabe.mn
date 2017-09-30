class RootContext(dict):
    __name = ''
    __parent__ = None

    def __getitem__(self, key):
        if key in self:
            return self[key]
        else:
            raise KeyError()
