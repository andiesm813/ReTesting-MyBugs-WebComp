import { html, css, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcComboComponent, IgcDatePickerComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent, IgcStepperComponent, IgcTextareaComponent } from 'igniteui-webcomponents';
import { BoxOfficeRevenueType } from '../models/Service/box-office-revenue-type';
import { serviceService } from '../services/Service-service';

defineComponents(IgcStepperComponent, IgcDatePickerComponent, IgcComboComponent, IgcInputComponent, IgcSelectComponent, IgcTextareaComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-view2')
export default class View2 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .stepper {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
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
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 0.5rem;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  constructor() {
    super();
    this.serviceBoxOfficeRevenue = serviceService.getBoxOfficeRevenue();
  }

  @query('#stepper')
  private stepper?: IgcStepperComponent;

  @state()
  private serviceBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-stepper title-position="bottom" id="stepper" class="stepper">
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
            <igc-combo ?outlined="${true}" .data="${this.serviceBoxOfficeRevenue}" label="Label/Placeholder" display-key="Franchise" ?single-select="${true}" class="user-input"></igc-combo>
            <igc-input label="Label" ?outlined="${true}" class="user-input"></igc-input>
            <igc-select ?outlined="${true}" label="Label/Placeholder" class="user-input">
              <igc-select-item value="Option">
                Option
              </igc-select-item>
            </igc-select>
            <igc-textarea label="Label/Placeholder" ?outlined="${true}" class="user-input"></igc-textarea>
            <div class="row-layout group">
              <igc-button type="button" @click="${() => this.stepper?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Address</p>
        </igc-step>
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button type="button" @click="${() => this.stepper?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button type="button" @click="${() => this.stepper?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Item</p>
        </igc-step>
        <igc-step ?optional="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button type="button" @click="${() => this.stepper?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button type="button" @click="${() => this.stepper?.reset()}" class="button">
                Reset
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Wrap</p>
          <p .slot="subtitle">(Optional)</p>
        </igc-step>
      </igc-stepper>
    `;
  }
}
