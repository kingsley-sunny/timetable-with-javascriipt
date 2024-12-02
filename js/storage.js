let store = JSON.parse(localStorage.getItem("time-tables")) ?? [];

class TimeTableStorage {
  addData(data) {
    store.push(data);

    localStorage.setItem("time-tables", JSON.stringify(store));
  }

  getAllData() {
    return store;
  }

  getSingleData(id) {
    return store.find(item => item.id === id);
  }

  updateData(id, data) {
    const formalData = this.getSingleData(id);

    if (!formalData) {
      throw new Error("Data not found");
    }

    const formalDataIndex = store.findIndex(item => item.id === id);

    store[formalDataIndex] = { ...data, id };

    localStorage.setItem("time-tables", JSON.stringify(store));
  }

  deleteData(id) {
    const newStore = store.filter(item => item.id !== id);

    store = newStore;

    localStorage.setItem("time-tables", JSON.stringify(store));
  }
}
