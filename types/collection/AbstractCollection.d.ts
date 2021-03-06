import { List, MutableList } from "../list/List.js.";
import { Sequence } from "../sequence/Sequence.js.";
import { Comparable } from "../utils/Comparable.js.";
import { Comparator } from "../utils/Comparator.js.";
import { Collection } from "./Collection.js";

export declare abstract class AbstractCollection<T> implements Collection<T> {
    public allMatch(predicate: (element: T) => boolean): boolean;
    public anyMatch(predicate: (element: T) => boolean): boolean;
    public associate<K, V>(transform: (element: T) => [K, V]): Map<K, V>;
    public associateBy<K>(selector: (element: T) => K): Map<K, T>;
    public associateBy<K, V>(keySelector: (element: T) => K, valueTransform: (element: T) => V): Map<K, V>;
    public associateWith<V>(valueSelector: (element: T) => V): Map<T, V>;
    public contains(element: T): boolean;
    public containsAll(elements: Iterable<T>): boolean;
    public count(): number;
    public count(predicate: (element: T) => boolean): number;
    public elementAt(index: number): T;
    abstract filter(predicate: (element: T) => boolean): Collection<T>;
    abstract filter<S extends T>(predicate: (element: T) => boolean): Collection<S>;
    abstract filterIndexed(predicate: (each: { element: T; index: number; }) => boolean): Collection<T>;
    abstract filterIndexed<S extends T>(predicate: (each: { element: T; index: number; }) => boolean): Collection<S>;
    public find(predicate: (element: T) => boolean): T;
    public findIndex(predicate: (element: T) => boolean): number;
    public findLast(predicate: (element: T) => boolean): T;
    public findLastIndex(predicate: (element: T) => boolean): number;
    public first(): T;
    abstract flatMap<U>(transform: (element: T) => Iterable<U>): Collection<U>;
    abstract flatMapIndexed<U>(transform: (each: { element: T; index: number; }) => Iterable<U>): Collection<U>;
    abstract flatten(this: Collection<Collection<T>>): Collection<T>;
    public fold<R>(initial: R, operation: (each: { acc: R; element: T; }) => R): R;
    public foldIndexed<R>(initial: R, operation: (each: { acc: R; element: T; index: number; }) => R): R;
    public forEach(consumer: (element: T) => void): void;
    public forEachIndexed(consumer: (each: { element: T; index: number; }) => void): void;
    public indexOf(element: T): number;
    public isEmpty(): boolean;
    public isNotEmpty(): boolean;
    abstract iterator(): IterableIterator<T>;
    public join(): string;
    public join(options: { separator?: string; prefix?: string; postfix?: string; limit?: number; truncated?: string; transform?: (item: T) => string; }): string;
    public last(): T;
    public lastIndexOf(element: T): number;
    abstract map<R>(transform: (element: T) => R): Collection<R>;
    abstract mapIndexed<R>(transform: (each: { element: T; index: number; }) => R): Collection<R>;
    public max<T extends Comparable<T>>(this: Collection<T>): T;
    public maxBy<R extends Comparable<R>>(selector: (element: T) => R): T;
    public maxOf(selector: (element: T) => number): T;
    public maxWith(comparator: Comparator<T>): T;
    public min<T extends Comparable<T>>(this: Collection<T>): T;
    public minBy<R extends Comparable<R>>(selector: (element: T) => R): T;
    public minOf(selector: (element: T) => number): T;
    public minWith(comparator: Comparator<T>): T;
    public noneMatch(predicate: (element: T) => boolean): boolean;
    abstract onEach(consumer: (element: T) => void): Collection<T>;
    abstract onEachIndexed(consumer: (each: { element: T; index: number; }) => void): Collection<T>;
    public reduce<S extends T>(operation: (each: { acc: S; element: T; }) => S): S;
    public reduceIndexed<S extends T>(operation: (each: { acc: S; element: T; index: number; }) => S): S;
    abstract size(): number;
    public toArray(): T[];
    public toCollection(): Collection<T>;
    public toIterable(): Iterable<T>;
    abstract toList(): List<T>;
    abstract toMutableList(): MutableList<T>;
    abstract toSequence(): Sequence<T>;
    abstract unzip<R>(this: Collection<[T, R]>): [Collection<T>, Collection<R>];
    abstract zip<R>(other: Iterable<R>): Collection<[T, R]>;
    abstract zip<R, V>(other: Iterable<R>, transform: (each: { a: T; b: R; }) => V): Collection<V>;
    abstract [Symbol.iterator](): IterableIterator<T>;

}