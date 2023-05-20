import { LightningElement, api, track, wire } from 'lwc';

export default class ProductsDetailLWC extends LightningElement {

    @api recordId;
    activeSections = ['MTC_Oil', 'Powder_Sachet'];

    get recordFieldsMTC(){
        return [
              { label: 'Does the customer reporting the issue handle Evivo directly?', apiValue: 'Customer_reported_issue_Evivo_directly__c'},
              { label: 'Was a user injured while opening or administering the Evivo product?', apiValue: 'User_injured_opening_Evivo_product__c'},
              { label: 'How was the user injured?', apiValue: 'How_was_the_user_injured__c'},
              { label: 'What steps were taken after the injury occurred?', apiValue: 'Actions_after_injury_from_Evivo_product__c'},
              { label: 'Did the customer have any issues with the Evivo product being used? (ex tube clogging)', apiValue: 'Issues_with_product_use_by_customer__c'},
              { label: 'Was Evivo used with a full feed?', apiValue: 'Was_Evivo_used_with_a_full_feed__c'},
              { label: 'What was Evivo fed with?', apiValue: 'What_was_Evivo_fed_with__c'},
              { label: 'Please provide information about the syringe used for feeding.', apiValue: 'Syringe_information_used_for_feeding__c'},
              { label: 'Please provide information about the syringe accessories used for feeding.', apiValue: 'Syringe_accessories_used_for_feeding__c'},
              { label: 'Please provide information about the feeding tube used.', apiValue: 'Information_about_the_feeding_tube_used__c'},
              { label: 'When was the feeding tube last changed?', apiValue: 'When_was_the_feeding_tube_last_changed__c'}
              ];
    }

    get recordFieldsPowderSachet(){
        return [
              { label: 'Physician Aware of event?', apiValue: 'Physician_Aware_of_event__c'},
              { label: 'If yes, permission to contact physician', apiValue: 'If_yes_permission_to_contact_physician__c'},
              { label: 'If yes, obtain physician’s contact details (name address, phone, email)', apiValue: 'If_yes_get_physicians_contact_details__c'},
              { label: 'If the reporter is an HCP, ask if they believe event(s) are related to company product?', apiValue: 'HCP_reporter_on_eventproduct_relation__c'},
              { label: 'Serving size, Frequency, What was product mixed with?', apiValue: 'Product_size_frequency_mixins__c'},
              { label: 'Start Date of Product', apiValue: 'Start_Date_of_Product__c'},
              { label: 'End Date of Product', apiValue: 'End_Date_of_Product__c'},
              { label: 'Event Onset Date', apiValue: 'Event_Onset_Date__c'},
              { label: 'Event Resolved', apiValue: 'Event_Resolved__c'},
              { label: 'If yes, resolved date?', apiValue: 'If_yes_resolved_date__c'}
              ];
    }
}
