//const siteName = Meteor.settings.public.site.name; // TODO: Move to utility
//TODO Use Link component
import UserMenu from '../UserMenu';
import Nav from '../Nav';
import SecondaryNav from '../SecondaryNav';
import * as styles from './header.less';

export default React.createClass({

  displayName: 'Header',

  render () {
    return (
      <header role='banner'>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <a className={styles.titleLink} href='/home'>
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