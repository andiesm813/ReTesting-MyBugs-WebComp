import { html, css, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcBadgeComponent, IgcBannerComponent, IgcButtonComponent, IgcButtonGroupComponent, IgcCalendarComponent, IgcCardComponent, IgcChipComponent, IgcDatePickerComponent, IgcDialogComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcListComponent, IgcListItemComponent, IgcRadioComponent, IgcRadioGroupComponent, IgcRatingComponent, IgcRippleComponent, IgcSelectComponent, IgcSliderComponent, IgcSnackbarComponent, IgcStepperComponent, IgcSwitchComponent, IgcTabsComponent, IgcTextareaComponent, IgcToggleButtonComponent, IgcTreeComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcButtonGroupComponent, IgcToggleButtonComponent, IgcChipComponent, IgcIconComponent, IgcSwitchComponent, IgcRadioGroupComponent, IgcRadioComponent, IgcIconButtonComponent, IgcRatingComponent, IgcBadgeComponent, IgcAvatarComponent, IgcTreeComponent, IgcBannerComponent, IgcDialogComponent, IgcCardComponent, IgcTabsComponent, IgcListComponent, IgcListItemComponent, IgcStepperComponent, IgcInputComponent, IgcSelectComponent, IgcDatePickerComponent, IgcTextareaComponent, IgcSliderComponent, IgcCalendarComponent, IgcSnackbarComponent);

@customElement('app-view1')
export default class View1 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 400px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      flex-shrink: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      height: max-content;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 320px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 0.5rem;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .button_1 {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .user-input_2 {
      height: max-content;
      min-width: min-content;
    }
    .user-input {
      width: max-content;
      height: max-content;
    }
    .radio {
      padding: 8px;
    }
    .rating {
      --ig-size: var(--ig-size-small);
      width: max-content;
      height: max-content;
    }
    .rating_1 {
      --ig-size: var(--ig-size-medium);
      width: max-content;
      height: max-content;
    }
    .button_2 {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .slider {
      height: max-content;
      min-width: 50px;
    }
    .button_3::part(base) {
      color: var(--ig-surface-500);
    }
    .icon-button::part(base) {
      color: var(--ig-surface-500);
      background-color: var(--ig-secondary-500);
    }
    .media-content {
      height: 200px;
      min-height: 200px;
      max-height: 200px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .stepper {
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .step-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 10px;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .chip {
      width: max-content;
      height: max-content;
    }
    .icon {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .icon_1 {
      color: var(--ig-surface-500);
    }
    .avatar {
      --ig-size: var(--ig-size-small);
    }
    .avatar_1 {
      --ig-size: var(--ig-size-medium);
    }
    .avatar_2 {
      --ig-size: var(--ig-size-large);
    }
    .icon_2 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .calendar {
      height: max-content;
    }
    .avatar_3::part(base) {
      background-color: transparent;
    }
    .avatar_4::part(base) {
      background-color: transparent;
    }
    .avatar_5::part(base) {
      background-color: transparent;
    }
    .avatar_1_1::part(base) {
      background-color: transparent;
    }
    .avatar_1_2::part(base) {
      background-color: transparent;
    }
    .avatar_1_3::part(base) {
      background-color: transparent;
    }
    .avatar_2_1::part(base) {
      background-color: transparent;
    }
    .avatar_2_2::part(base) {
      background-color: transparent;
    }
    .avatar_2_3::part(base) {
      background-color: transparent;
    }
    .badge {
      width: max-content;
      height: max-content;
    }
    .notification {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .tree {
      min-width: max-content;
      min-height: max-content;
      flex-shrink: 0;
    }
    .list {
      height: max-content;
      flex-shrink: 0;
    }
  `;

  @query('#dialog')
  private dialog?: IgcDialogComponent;

  @query('#banner')
  private banner?: IgcBannerComponent;

  @query('#snackbar')
  private snackbar?: IgcSnackbarComponent;

  @query('#stepper')
  private stepper?: IgcStepperComponent;

  @state()
  private checked: boolean = true;

  @state()
  private value: string = '1';

  @state()
  private value1: number = 4;

  @state()
  private value2: number = 0;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-button type="button" @click="${() => this.dialog?.toggle()}" class="button button_3">
          OPEN DIALOG
          <igc-ripple></igc-ripple>
        </igc-button>
        <div class="row-layout group_1">
          <igc-button variant="outlined" type="button" @click="${() => this.banner?.toggle()}" class="button_1">
            SHOW BANNER
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" type="button" @click="${() => this.snackbar?.toggle()}" class="button_1">
            SHOW SNACKBAR
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <igc-button-group class="user-input_2">
          <igc-toggle-button>
            Button
            <igc-ripple></igc-ripple>
          </igc-toggle-button>
          <igc-toggle-button>
            Button
            <igc-ripple></igc-ripple>
          </igc-toggle-button>
          <igc-toggle-button>
            Button
            <igc-ripple></igc-ripple>
          </igc-toggle-button>
        </igc-button-group>
        <div class="row-layout group_1">
          <div class="column-layout group_2">
            <igc-chip class="chip">
              <span slot="prefix">
                <span class="material-icons icon">
                  place
                </span>
              </span>
              Country
            </igc-chip>
            <igc-switch class="user-input">
              Label
            </igc-switch>
            <igc-switch ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="user-input">
              Label
            </igc-switch>
          </div>
          <div class="column-layout group_3">
            <igc-radio-group .value="${this.value}" @igcChange="${(e: any) => this.value = e.target.value}" class="user-input">
              <igc-radio value="1" class="radio">
                Label
              </igc-radio>
              <igc-radio value="2" class="radio">
                Label
              </igc-radio>
              <igc-radio value="3" class="radio">
                Label
              </igc-radio>
            </igc-radio-group>
          </div>
          <div class="row-layout group_1">
            <igc-icon-button variant="flat">
              <span class="material-icons">
                email
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons icon_1">
                email
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
        </div>
        <igc-radio-group alignment="horizontal" .value="${this.value}" @igcChange="${(e: any) => this.value = e.target.value}" class="user-input">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
        <div class="column-layout group_4">
          <div class="row-layout group_5">
            <igc-rating label="Rating Component" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail}" class="rating"></igc-rating>
            <igc-rating label="Rating Component" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail}" class="rating_1"></igc-rating>
          </div>
          <igc-rating label="Rating Component" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail}" class="user-input"></igc-rating>
        </div>
        <div class="row-layout group_6">
          <igc-badge class="badge">
            Badge
          </igc-badge>
          <igc-badge class="badge">
            1
          </igc-badge>
          <igc-badge class="badge">
            10
          </igc-badge>
          <igc-badge class="badge">
            1000
          </igc-badge>
          <igc-badge class="badge">
            <span class="material-icons">
              mail
            </span>
          </igc-badge>
        </div>
        <div class="row-layout group_6">
          <igc-avatar src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39..v1605559903.png" shape="circle" class="avatar avatar_3"></igc-avatar>
          <igc-avatar src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39..v1605559903.png" shape="circle" class="avatar_1 avatar_1_1"></igc-avatar>
          <igc-avatar src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39..v1605559903.png" shape="circle" class="avatar_2 avatar_2_1"></igc-avatar>
          <igc-avatar initials="AB" shape="circle" class="avatar"></igc-avatar>
          <igc-avatar initials="AB" shape="circle" class="avatar_1"></igc-avatar>
          <igc-avatar initials="AB" shape="circle" class="avatar_2"></igc-avatar>
        </div>
        <div class="row-layout group_6">
          <igc-avatar src="/src/assets/Avatar3.png" shape="circle" class="avatar avatar_4"></igc-avatar>
          <igc-badge class="badge">
            Badge
          </igc-badge>
          <igc-avatar src="/src/assets/Avatar3.png" shape="circle" class="avatar_1 avatar_1_2"></igc-avatar>
          <igc-badge class="badge">
            Badge
          </igc-badge>
          <igc-avatar src="/src/assets/Avatar3.png" shape="circle" class="avatar_2 avatar_2_2"></igc-avatar>
          <igc-badge class="badge">
            Badge
          </igc-badge>
        </div>
        <igc-tree selection="none" class="tree">
          <igc-tree-item label="Design" ?expanded="${true}">
            <igc-tree-item label="Figma" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Adobe XD" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Sketch" ?expanded="${true}"></igc-tree-item>
          </igc-tree-item>
          <igc-tree-item label="Development">
            <igc-tree-item label="Angular" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Blazor" ?expanded="${true}"></igc-tree-item>
            <igc-tree-item label="Web components" ?expanded="${true}"></igc-tree-item>
          </igc-tree-item>
        </igc-tree>
        <igc-banner id="banner" class="notification">
          <p>
            Banner message
          </p>
          <igc-banner-actions>
            <igc-button variant="flat" type="button" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
          </igc-banner-actions>
          <span class="material-icons icon_2">
            mail
          </span>
        </igc-banner>
      </div>
      <igc-dialog ?close-on-outside-click="${true}" id="dialog">
        <h5 slot="title">
          Confirmation
        </h5>
        <p class="typography__body-1 text">
          This is a simple custom dialog
        </p>
        <div slot="footer">
          <igc-button type="button" class="button">
            ADD PRODUCT
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="button">
            Cancel
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
      <div class="column-layout group_7">
        <igc-card class="card">
          <igc-card-media class="media-content">
            <img src="/src/assets/design%20system.png" class="image" />
          </igc-card-media>
          <igc-card-header>
            <h3 slot="title">
              Title goes here...
            </h3>
            <h5 slot="subtitle">
              Subtitle goes here...
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content">
            <p class="typography__body-2 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" type="button" slot="start" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <igc-tabs class="tabs">
          <igc-tab ?selected="${true}">
            <span class="material-icons">
              info
            </span>
            <span>Label</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content">
            <igc-list class="list">
              <igc-list-item>
                <igc-avatar src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39..v1605559903.png" slot="start" shape="circle" class="avatar avatar_5"></igc-avatar>
                <div slot="title">Title goes here</div>
                <div slot="subtitle">Subtitle...</div>
                <span slot="end" class="material-icons icon_2">
                  star
                </span>
              </igc-list-item>
              <igc-list-item>
                <igc-avatar src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39..v1605559903.png" slot="start" shape="circle" class="avatar_1 avatar_1_3"></igc-avatar>
                <div slot="title">Title goes here</div>
                <div slot="subtitle">Subtitle...</div>
                <span slot="end" class="material-icons icon_2">
                  star
                </span>
              </igc-list-item>
              <igc-list-item>
                <igc-avatar src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39..v1605559903.png" slot="start" shape="circle" class="avatar_2 avatar_2_3"></igc-avatar>
                <div slot="title">Title goes here</div>
                <div slot="subtitle">Subtitle...</div>
                <span slot="end" class="material-icons icon_2">
                  star
                </span>
              </igc-list-item>
            </igc-list>
          </igc-tab-panel>
          <igc-tab>
            <span class="material-icons">
              info
            </span>
            <span>Label</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab>
            <span class="material-icons">
              info
            </span>
            <span>Label</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab>
            <span class="material-icons">
              info
            </span>
            <span>Label</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab>
            <span class="material-icons">
              info
            </span>
            <span>Label</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
        </igc-tabs>
      </div>
      <div class="column-layout group_8">
        <igc-stepper title-position="bottom" id="stepper" class="stepper">
          <igc-step ?invalid="${true}">
            <div class="column-layout step-content">
              <p class="typography__body-2 text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
              </p>
              <div class="row-layout group_9">
                <igc-button type="button" @click="${() => this.stepper?.next()}" class="button_2">
                  Next
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
            <p .slot="title">Address</p>
          </igc-step>
          <igc-step ?invalid="${true}">
            <div class="column-layout step-content">
              <igc-input label="Label" ?outlined="${true}" class="user-input_2"></igc-input>
              <igc-select ?outlined="${true}" label="First Select" class="user-input_2">
                <igc-select-item value="Option">
                  Option
                </igc-select-item>
              </igc-select>
              <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
              <igc-textarea label="Label/ NoPlaceholder" ?outlined="${true}" class="user-input_2"></igc-textarea>
              <div class="row-layout group_9">
                <igc-button type="button" @click="${() => this.stepper?.prev()}" class="button_2">
                  Prev
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button type="button" @click="${() => this.stepper?.next()}" class="button_2">
                  Next
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
            <p .slot="title">Inputs Cropped</p>
          </igc-step>
          <igc-step ?optional="${true}">
            <div class="column-layout step-content">
              <div class="column-layout group_10">
                <igc-slider min="0" max="100" step="10" ?discrete-track="${true}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="slider"></igc-slider>
                <igc-slider min="0" max="100" step="10" ?discrete-track="${true}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="slider"></igc-slider>
                <igc-slider min="0" max="100" step="10" ?discrete-track="${true}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="slider"></igc-slider>
                <igc-slider min="0" max="100" step="10" ?discrete-track="${true}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="slider"></igc-slider>
              </div>
              <div class="row-layout group_9">
                <igc-button type="button" @click="${() => this.stepper?.prev()}" class="button_2">
                  Prev
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button type="button" @click="${() => this.stepper?.reset()}" class="button_2">
                  Reset
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
            <p .slot="title">Sliders</p>
            <p .slot="subtitle">(Optional)</p>
          </igc-step>
        </igc-stepper>
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
      </div>
      <div class="column-layout group_7">
        <igc-input label="Label" ?outlined="${true}" class="user-input_2"></igc-input>
        <igc-input label="Label" ?outlined="${false}" class="user-input_2"></igc-input>
        <igc-select ?outlined="${true}" label="First Select" class="user-input_2">
          <igc-select-item value="Option">
            Option
          </igc-select-item>
        </igc-select>
        <igc-select ?outlined="${true}" label="Copied and Pasted 1s Select" class="user-input_2">
          <igc-select-item value="Option">
            Option
          </igc-select-item>
        </igc-select>
        <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
        <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
        <igc-textarea label="Label/ NoPlaceholder" ?outlined="${true}" class="user-input_2"></igc-textarea>
        <igc-textarea placeholder="Placeholder / No Label" ?outlined="${true}" class="user-input_2"></igc-textarea>
        <igc-textarea label="Label" placeholder="Placeholder" ?outlined="${true}" class="user-input_2"></igc-textarea>
      </div>
      <igc-snackbar action-text="Action" @igcAction="${() => this.snackbar?.toggle()}" id="snackbar" class="notification">
        This is a message
      </igc-snackbar>
    `;
  }
}
