import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";
import CreateTodo from "@/components/CreateTodo.vue";
import TodoList from "@/components/TodoList_test.vue";

describe("Todo.vue", () => {
  const description = "this test";
  const completed = true;
  const wrapper = shallowMount(Todo, {
    propsData: { description, completed }
  });

  it("Renders props.description when passed", () => {
    expect(wrapper.find("span").text()).toBe("this test");
  });

  it("Set isEditing to false by default", () => {
    expect(wrapper.vm.$data["isEditing"]).toBe(false);
  });

  it("Edit button invert isEditing value", () => {
    wrapper.find(".editing").trigger("click");
    expect(wrapper.vm.$data["isEditing"]).toBe(true);
  });

  it("Editing emits the new description", () => {
      wrapper.vm.$data["newTodoDescription"] = "ahmed"
      wrapper.find(".editing").trigger("click");
      expect(wrapper.emitted()["on-edit"][0][0]).toBe("ahmed");
  });

    it("Checkbox emits the toggle function", () => {
        wrapper.find(".checkbox").trigger("change");
        expect(wrapper.emitted()["on-toggle"]).toBeTruthy()
    });

    it("Delete emits the delete function", () => {
        wrapper.find(".delete").trigger("click");
        expect(wrapper.emitted()["on-delete"]).toBeTruthy()
    });
});

describe("CreateTodo.vue", () => {

  const wrapper = shallowMount(CreateTodo);
  const x = JSON.parse(localStorage.getItem("Todos"));

  const task = "New task";
  wrapper.vm.$data["newTodo"] = task;

  it("add props.newTodo when passed", () => {
    wrapper.vm.addTodo();
    expect(wrapper.emitted()["on-new-todo"][0][0]).toBe(task)
  });
});


describe("TodoList.vue", () => {


  const wrapper = shallowMount(TodoList);
  const x  = wrapper.vm.$data["todos"].length;

  const task = {
    description: "play football",
    completed: true
  };

  it("addTodo adds new entry to todos", () => {
    wrapper.vm.addTodo(task);
    expect(wrapper.vm.$data["todos"].length).toEqual(x+1)
  });

  it("ToggleTodo toggles completed state of todo item", () => {
    const check = wrapper.vm.$data["todos"][0].completed;
    wrapper.vm.toggleTodo(wrapper.vm.$data["todos"][0]);
    expect(wrapper.vm.$data["todos"][0].completed).toBe(!check)

  });

  it("EditTodo Change the description of todo item", () => {
    wrapper.vm.editTodo(wrapper.vm.$data["todos"][0], "playing dota 2");
    expect(wrapper.vm.$data["todos"][0].description).toBe("playing dota 2")
  });

  it("DeleteTodo toggles completed state of todo item", () => {
    wrapper.vm.deleteTodo(wrapper.vm.$data["todos"][0]);
    expect(wrapper.vm.$data["todos"].length).toEqual(x)
  });


});
