# Neo4j Queries

## Label Relationships

- Each `Product` belongs to a `Category`: `(:Product)-[:is_a]->(:Category)`.
- Each `Product` belongs to a `Range`, each `Range` belongs to a `Line`: `(:Product)-[:belongs_to]->(:Range)-[:belongs_to]->(:Line)`.
- Some `Product`s belong to `Set`s: `(:Product)->[:belongs_to]->(:Set)`.

### Defaults

- `Category`: paint
- `Range`: model color
- `Line`: model paints

## Constraint Queries

### Names

`Range` names are *not* unique.

- `create constraint on (product:Product) assert product.name is unique`
- `create constraint on (set:Set) assert set.name is unique`
- `create constraint on (line:Line) assert line.name is unique`

### Model Numbers

`Product`s and `Set`s have `modelNumber`s.

- `create constraint on (product:Product) assert product.modelNumber is unique`.
- `create constraint on (set:Set) assert set.modelNumber is unique`.

## Limitations of Community Edition

- Can't set constraint that a property must exist.
- Can't assign uniqueness to an aggregate of properties.
