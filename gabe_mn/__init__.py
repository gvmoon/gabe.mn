from gabe_mn.contexts.root import RootContext
from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(
        root_factory=get_root,
        settings=settings
    )

    config.add_static_view(name='static', path='./static/dist')
    config.include('pyramid_jinja2')
    config.scan()

    return config.make_wsgi_app()


def get_root(request):
    return RootContext()
