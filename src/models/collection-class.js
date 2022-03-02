'use strict';

class Collection {
    constructor(model) {
        this.model = model;
    }
    async readRecord(id) {
        try {
            if (id) {
                return await this.model.findOne({ where: { id: id } })
            } else {
                return await this.model.findAll();
            }
        } catch (e) {
            console.error('error in reading record(s) for model: ', this.model.name);
        }
    }
    async createRecord(obj) {
        try {
            return await this.model.create(obj);
        } catch (e) {
            console.error('error in creating a new record for model: ', this.model.name);
        }
    }
    async updateRecord(id, obj) {
        try {
            const foundItem = await this.model.findOne({ where: { id: id } });
            // console.log(foundItem);
            return await foundItem.update(obj)
        } catch (e) {
            console.error('error in updating record(s) for model: ', this.model.name);
        }
    }
    async deleteRecord(id) {
        try {
            return await this.model.destroy({ where: { id: id } })
        } catch (e) {
            console.error('error in deleting record(s) for model: ', this.model.name);
        }
    }
}

module.exports = Collection;