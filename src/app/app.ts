import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: 200px;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 200px;
    }
    .icon-button::part(base) {
      color: var(--ig-info-500);
      background-color: var(--ig-gray-500);
    }
    .icon {
      color: var(--ig-info-500);
    }
    .h6 {
      margin: 0;
      flex-shrink: 0;
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
  `;

  @query('#nav-drawer')
  private navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <igc-icon-button slot="start" variant="flat" @click="${() => this.navDrawer?.toggle()}" class="icon-button">
          <span class="material-icons icon">
            menu
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <div class="row-layout group">
          <h6 class="h6">
            App Name
          </h6>
        </div>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            search
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            favorite
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            more_vert
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
      </igc-navbar>
      <div class="row-layout group_1">
        <igc-nav-drawer id="nav-drawer" class="nav-drawer">
          <igc-nav-drawer-item @click="${() => Router.go(`/view1`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                home
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">All Components</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/view2`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                dns
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">View 2</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/view3`)}">
            <span slot="icon">
              <span class="material-icons icon_1">
                dashboard
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">View 3</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
