import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcDatePickerComponent, IgcDialogComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcDatePickerComponent, IgcDialogComponent);

@customElement('app-view1')
export default class View1 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
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
      padding: 32px;
      width: 400px;
      min-width: 50px;
      min-height: 50px;
      max-width: 400px;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .button_1::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_2::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_3::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_4::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_5::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_6::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_7::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_8::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_9::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_10::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_11::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_12::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_13::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_14::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_15::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_16::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_17::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_18::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_19::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_20::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_21::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_22::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_23::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_24::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_25::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_26::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_27::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_28::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_29::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_30::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_31::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_32::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_33::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_34::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_35::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_36::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_37::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_38::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_39::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_40::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_41::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_42::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_43::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_44::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_45::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_46::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_47::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_48::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_49::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_50::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_51::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_52::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_53::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_54::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_55::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_56::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_57::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_58::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_59::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_60::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_61::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_62::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_63::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_64::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_65::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_66::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_67::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_68::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_69::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_70::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_71::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_72::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_73::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_74::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_75::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_76::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_77::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_78::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_79::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_80::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_81::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_82::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_83::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_84::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_85::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_86::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_87::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_88::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_89::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_90::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_91::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_92::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_93::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_94::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_95::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_96::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_97::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_98::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_99::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_100::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_101::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_102::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_103::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_104::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_105::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_106::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_107::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_108::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_109::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_110::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_111::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_112::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_113::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_114::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_115::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_116::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_117::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_118::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_119::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_120::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_121::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_122::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_123::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_124::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_125::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_126::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_127::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_128::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_129::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .button_130::part(base) {
      background-color: var(--ig-secondary-200);
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  @query('#dialog')
  private dialog?: IgcDialogComponent;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-button variant="outlined" type="button" @click="${() => this.dialog?.toggle()}" class="button button_1">
          OPEN DIALOG
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
        <igc-button variant="outlined" type="button" class="button button_2">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_3">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_4">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_5">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_6">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_7">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_8">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_9">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_10">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_11">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_12">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_13">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_14">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_15">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_16">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_17">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_18">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_19">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_20">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_21">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_22">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_23">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_24">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_25">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_26">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
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
      <div class="column-layout group">
        <igc-button variant="outlined" type="button" class="button button_27">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
        <igc-button variant="outlined" type="button" class="button button_28">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_29">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_30">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_31">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_32">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_33">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_34">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_35">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_36">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_37">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_38">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_39">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_40">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_41">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_42">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_43">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_44">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_45">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_46">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_47">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_48">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_49">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_50">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_51">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_52">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
      <div class="column-layout group">
        <igc-button variant="outlined" type="button" class="button button_53">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
        <igc-button variant="outlined" type="button" class="button button_54">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_55">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_56">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_57">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_58">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_59">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_60">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_61">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_62">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_63">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_64">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_65">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_66">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_67">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_68">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_69">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_70">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_71">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_72">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_73">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_74">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_75">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_76">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_77">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_78">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
      <div class="column-layout group">
        <igc-button variant="outlined" type="button" class="button button_79">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
        <igc-button variant="outlined" type="button" class="button button_80">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_81">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_82">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_83">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_84">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_85">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_86">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_87">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_88">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_89">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_90">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_91">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_92">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_93">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_94">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_95">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_96">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_97">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_98">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_99">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_100">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_101">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_102">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_103">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_104">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
      <div class="column-layout group">
        <igc-button variant="outlined" type="button" class="button button_105">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-date-picker label="Date" ?outlined="${true}" mode="dialog" class="date-picker"></igc-date-picker>
        <igc-button variant="outlined" type="button" class="button button_106">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_107">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_108">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_109">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_110">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_111">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_112">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_113">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_114">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_115">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_116">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_117">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_118">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_119">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_120">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_121">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_122">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_123">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_124">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_125">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_126">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_127">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_128">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_129">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" type="button" class="button button_130">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
    `;
  }
}
