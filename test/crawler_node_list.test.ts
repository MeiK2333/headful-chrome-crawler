import { CrawlerNodeList } from "../src/queue"
import { Task } from "../src/task"

test('new', () => {
    let list = new CrawlerNodeList()
    expect(list.max).toBe(0)
})

test('delete', () => {
    let list = new CrawlerNodeList()
    let node1 = new Task('')
    let node2 = new Task('')
    list.add(node1)
    let node3 = list.delete(node1)
    expect(node3).toBe(node1)
    let node4 = list.delete(node1)
    expect(node4).toBe(null)
})

test('size', () => {
    let list = new CrawlerNodeList()
    let node1 = new Task('')
    let node2 = new Task('')
    let node3 = new Task('')
    expect(list.size()).toBe(0)
    list.add(node1)
    expect(list.size()).toBe(1)
    list.add(node2)
    list.add(node3)
    expect(list.size()).toBe(3)
    list.delete(node1)
    expect(list.size()).toBe(2)
})

test('pop', () => {
    let list = new CrawlerNodeList()
    let node1 = new Task('')
    let node2 = new Task('')
    let node3 = new Task('')
    list.add(node1)
    list.add(node2)
    list.add(node3)
    let node4 = list.pop()
    expect(node1).toBe(node4)
    list.pop()
    list.pop()
    let node5 = list.pop()
    expect(node5).toBe(null)
})

test('empty', () => {
    let list = new CrawlerNodeList()
    let node1 = new Task('')
    expect(list.empty()).toBe(true)
    list.add(node1)
    expect(list.empty()).toBe(false)
    list.pop()
    expect(list.empty()).toBe(true)
})