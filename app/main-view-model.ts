import { Observable } from '@nativescript/core';
import { SurveyResponse, SurveyStore } from './models/survey';

export class HelloWorldModel extends Observable {
    // User Information
    private _userName: string = '';
    private _mobileNumber: string = '';
    private _address: string = '';

    // Survey Data
    private _householdSize: number = 1;
    private _mealsCooked: number = 3;
    private _foodWasteAmount: number = 0;
    private _selectedReasonIndex: number = 0;
    private _willingToReduce: boolean = true;
    private _message: string = '';
    private _messageType: string = '';

    wasteReasons = [
        'Cooked too much',
        'Forgot about leftovers',
        'Food spoiled',
        'Didn\'t like the taste',
        'Other'
    ];

    constructor() {
        super();
    }

    // User Information Getters and Setters
    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        if (this._userName !== value) {
            this._userName = value;
            this.notifyPropertyChange('userName', value);
        }
    }

    get mobileNumber(): string {
        return this._mobileNumber;
    }

    set mobileNumber(value: string) {
        if (this._mobileNumber !== value) {
            this._mobileNumber = value;
            this.notifyPropertyChange('mobileNumber', value);
        }
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        if (this._address !== value) {
            this._address = value;
            this.notifyPropertyChange('address', value);
        }
    }

    // Survey Data Getters and Setters
    get householdSize(): number {
        return this._householdSize;
    }

    set householdSize(value: number) {
        if (this._householdSize !== value) {
            this._householdSize = value;
            this.notifyPropertyChange('householdSize', value);
        }
    }

    get mealsCooked(): number {
        return this._mealsCooked;
    }

    set mealsCooked(value: number) {
        if (this._mealsCooked !== value) {
            this._mealsCooked = value;
            this.notifyPropertyChange('mealsCooked', value);
        }
    }

    get foodWasteAmount(): number {
        return this._foodWasteAmount;
    }

    set foodWasteAmount(value: number) {
        if (this._foodWasteAmount !== value) {
            this._foodWasteAmount = value;
            this.notifyPropertyChange('foodWasteAmount', value);
        }
    }

    get selectedReasonIndex(): number {
        return this._selectedReasonIndex;
    }

    set selectedReasonIndex(value: number) {
        if (this._selectedReasonIndex !== value) {
            this._selectedReasonIndex = value;
            this.notifyPropertyChange('selectedReasonIndex', value);
        }
    }

    get willingToReduce(): boolean {
        return this._willingToReduce;
    }

    set willingToReduce(value: boolean) {
        if (this._willingToReduce !== value) {
            this._willingToReduce = value;
            this.notifyPropertyChange('willingToReduce', value);
        }
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value);
        }
    }

    get messageType(): string {
        return this._messageType;
    }

    set messageType(value: string) {
        if (this._messageType !== value) {
            this._messageType = value;
            this.notifyPropertyChange('messageType', value);
        }
    }

    onSubmit() {
        if (this.validateInput()) {
            const response: SurveyResponse = {
                userName: this._userName,
                mobileNumber: this._mobileNumber,
                address: this._address,
                date: new Date(),
                householdSize: this._householdSize,
                mealsCooked: this._mealsCooked,
                foodWasteAmount: this._foodWasteAmount,
                mainWasteReason: this.wasteReasons[this._selectedReasonIndex],
                willingToReduce: this._willingToReduce
            };

            SurveyStore.addResponse(response);
            this.message = 'Thank you for completing the survey!';
            this.messageType = 'text-green-600';
            this.resetForm();
        }
    }

    private validateInput(): boolean {
        if (!this._userName.trim()) {
            this.showError('Please enter your name');
            return false;
        }
        if (!this._mobileNumber.trim()) {
            this.showError('Please enter your mobile number');
            return false;
        }
        if (!this._address.trim()) {
            this.showError('Please enter your address');
            return false;
        }
        if (this._householdSize < 1) {
            this.showError('Please enter a valid household size');
            return false;
        }
        if (this._mealsCooked < 0) {
            this.showError('Please enter a valid number of meals');
            return false;
        }
        if (this._foodWasteAmount < 0) {
            this.showError('Please enter a valid waste amount');
            return false;
        }
        return true;
    }

    private showError(message: string) {
        this.message = message;
        this.messageType = 'text-red-600';
    }

    private resetForm() {
        this.userName = '';
        this.mobileNumber = '';
        this.address = '';
        this.householdSize = 1;
        this.mealsCooked = 3;
        this.foodWasteAmount = 0;
        this.selectedReasonIndex = 0;
        this.willingToReduce = true;
    }
}