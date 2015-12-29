//const siteName = Meteor.settings.public.site.name; // TODO: Move to utility
//TODO Use Link component
import UserMenu from './UserMenu';
import Nav from './Nav';
import SecondaryNav from './SecondaryNav';

export default React.createClass({

  displayName: 'Header',

  render () {
    return (
      <header className='main-header' role='banner'>
        <div className='main-header__container'>
          <h1 className='main-title'>
            <a className='main-title__link' href='/home'>
              The site name
            </a>
          </h1>

          <UserMenu />
          <Nav />
        </div>

        <SecondaryNav />
      </header>
    );
  }

});