import { __decorate } from "tslib";
import { Component, ContentChildren, Input } from "@angular/core";
var AgGridColumn = /** @class */ (function () {
    function AgGridColumn() {
    }
    AgGridColumn_1 = AgGridColumn;
    AgGridColumn.prototype.hasChildColumns = function () {
        if (this.childColumns && this.childColumns.length > 0) {
            // necessary because of https://github.com/angular/angular/issues/10098
            return !(this.childColumns.length === 1 && this.childColumns.first === this);
        }
        return false;
    };
    AgGridColumn.prototype.toColDef = function () {
        var colDef = this.createColDefFromGridColumn(this);
        if (this.hasChildColumns()) {
            colDef["children"] = this.getChildColDefs(this.childColumns);
        }
        return colDef;
    };
    AgGridColumn.prototype.getChildColDefs = function (childColumns) {
        return childColumns
            // necessary because of https://github.com/angular/angular/issues/10098
            .filter(function (column) { return !column.hasChildColumns(); })
            .map(function (column) {
            return column.toColDef();
        });
    };
    ;
    AgGridColumn.prototype.createColDefFromGridColumn = function (from) {
        var colDef = {};
        Object.assign(colDef, from);
        delete colDef.childColumns;
        return colDef;
    };
    ;
    var AgGridColumn_1;
    __decorate([
        ContentChildren(AgGridColumn_1)
    ], AgGridColumn.prototype, "childColumns", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "children", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "sortingOrder", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "allowedAggFuncs", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "menuTabs", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellClassRules", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "icons", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerGroupComponent", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerGroupComponentFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerGroupComponentParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellStyle", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellRendererParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellEditorFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellEditorParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pinnedRowCellRendererFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pinnedRowCellRendererParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "filterFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "filterParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerComponent", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerComponentFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerComponentParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "floatingFilterComponent", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "floatingFilterComponentParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "floatingFilterComponentFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "tooltipComponent", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "tooltipComponentParams", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "tooltipComponentFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "refData", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerName", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "columnGroupShow", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerClass", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "toolPanelClass", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerValueGetter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "groupId", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "colId", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "sort", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "field", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "type", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "tooltipField", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerTooltip", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellClass", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "showRowGroup", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "filter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "aggFunc", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellRenderer", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellEditor", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pinned", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "chartDataType", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "sortedAt", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "flex", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "width", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "minWidth", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "maxWidth", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "rowGroupIndex", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pivotIndex", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "dndSourceOnRowDrag", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "valueGetter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "valueSetter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "filterValueGetter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "keyCreator", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellRendererFramework", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pinnedRowCellRenderer", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "valueFormatter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pinnedRowValueFormatter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "valueParser", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "comparator", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "equals", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pivotComparator", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressKeyboardEvent", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "colSpan", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "rowSpan", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "getQuickFilterText", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "newValueHandler", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "onCellValueChanged", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "onCellClicked", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "onCellDoubleClicked", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "onCellContextMenu", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "rowDragText", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "tooltip", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "tooltipValueGetter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellRendererSelector", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "cellEditorSelector", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressCellFlash", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressColumnsToolPanel", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressFiltersToolPanel", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "openByDefault", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "marryChildren", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "hide", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "rowGroup", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "pivot", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "checkboxSelection", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerCheckboxSelection", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "headerCheckboxSelectionFilteredOnly", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressMenu", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressSorting", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressMovable", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressFilter", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "lockPosition", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "lockVisible", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "lockPinned", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "unSortIcon", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressSizeToFit", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressResize", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressAutoSize", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "enableRowGroup", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "enablePivot", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "enableValue", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "editable", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressPaste", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "suppressNavigable", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "enableCellChangeFlash", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "rowDrag", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "dndSource", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "autoHeight", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "sortable", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "resizable", void 0);
    __decorate([
        Input()
    ], AgGridColumn.prototype, "singleClickEdit", void 0);
    AgGridColumn = AgGridColumn_1 = __decorate([
        Component({
            selector: 'ag-grid-column',
            template: ''
        })
    ], AgGridColumn);
    return AgGridColumn;
}());
export { AgGridColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWctZ3JpZC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2FnLWdyaWQtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBTzNFO0lBQUE7SUE0SkEsQ0FBQztxQkE1SlksWUFBWTtJQUdkLHNDQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCx1RUFBdUU7WUFDdkUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDbEIsTUFBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVPLHNDQUFlLEdBQXZCLFVBQXdCLFlBQXFDO1FBQ3pELE9BQU8sWUFBWTtZQUNmLHVFQUF1RTthQUN0RSxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQzthQUMzQyxHQUFHLENBQUMsVUFBQyxNQUFvQjtZQUN0QixPQUFPLE1BQU0sQ0FBQyxR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O1NBQ2YsQ0FBQztPQUNXLFlBQVksQ0E0SnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVKRCxJQTRKQztTQTVKWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29sRGVmfSBmcm9tIFwiYWctZ3JpZC1jb21tdW5pdHlcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhZy1ncmlkLWNvbHVtbicsXG4gICAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEFnR3JpZENvbHVtbiB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihBZ0dyaWRDb2x1bW4pIHB1YmxpYyBjaGlsZENvbHVtbnM6IFF1ZXJ5TGlzdDxBZ0dyaWRDb2x1bW4+O1xuXG4gICAgcHVibGljIGhhc0NoaWxkQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRDb2x1bW5zICYmIHRoaXMuY2hpbGRDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIG5lY2Vzc2FyeSBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwMDk4XG4gICAgICAgICAgICByZXR1cm4gISh0aGlzLmNoaWxkQ29sdW1ucy5sZW5ndGggPT09IDEgJiYgdGhpcy5jaGlsZENvbHVtbnMuZmlyc3QgPT09IHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9Db2xEZWYoKTogQ29sRGVmIHtcbiAgICAgICAgbGV0IGNvbERlZjogQ29sRGVmID0gdGhpcy5jcmVhdGVDb2xEZWZGcm9tR3JpZENvbHVtbih0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNDaGlsZENvbHVtbnMoKSkge1xuICAgICAgICAgICAgKDxhbnk+Y29sRGVmKVtcImNoaWxkcmVuXCJdID0gdGhpcy5nZXRDaGlsZENvbERlZnModGhpcy5jaGlsZENvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xEZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDaGlsZENvbERlZnMoY2hpbGRDb2x1bW5zOiBRdWVyeUxpc3Q8QWdHcmlkQ29sdW1uPikge1xuICAgICAgICByZXR1cm4gY2hpbGRDb2x1bW5zXG4gICAgICAgICAgICAvLyBuZWNlc3NhcnkgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDA5OFxuICAgICAgICAgICAgLmZpbHRlcihjb2x1bW4gPT4gIWNvbHVtbi5oYXNDaGlsZENvbHVtbnMoKSlcbiAgICAgICAgICAgIC5tYXAoKGNvbHVtbjogQWdHcmlkQ29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi50b0NvbERlZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgY3JlYXRlQ29sRGVmRnJvbUdyaWRDb2x1bW4oZnJvbTogQWdHcmlkQ29sdW1uKTogQ29sRGVmIHtcbiAgICAgICAgbGV0IGNvbERlZjogQ29sRGVmID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oY29sRGVmLCBmcm9tKTtcbiAgICAgICAgZGVsZXRlICg8YW55PmNvbERlZikuY2hpbGRDb2x1bW5zO1xuICAgICAgICByZXR1cm4gY29sRGVmO1xuICAgIH07XG5cbiAgICAvLyBpbnB1dHMgLSBwcmV0dHkgbXVjaCBtb3N0IG9mIENvbERlZiwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mIHRlbXBsYXRlLCB0ZW1wbGF0ZVVybCBhbmQgaW50ZXJuYWwgb25seSBwcm9wZXJ0aWVzXG4gICAgLy8gQFNUQVJUQFxuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGlsZHJlbjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0aW5nT3JkZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgYWxsb3dlZEFnZ0Z1bmNzOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIG1lbnVUYWJzOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxDbGFzc1J1bGVzOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGljb25zOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckdyb3VwQ29tcG9uZW50OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckdyb3VwQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckdyb3VwQ29tcG9uZW50UGFyYW1zOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxTdHlsZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXJQYXJhbXM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvckZyYW1ld29yazogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yUGFyYW1zOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlckZyYW1ld29yazogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWRSb3dDZWxsUmVuZGVyZXJQYXJhbXM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyRnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlclBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb21wb25lbnQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbXBvbmVudFBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudFBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudEZyYW1ld29yazogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29tcG9uZW50OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBDb21wb25lbnRQYXJhbXM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcENvbXBvbmVudEZyYW1ld29yazogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZWZEYXRhOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlck5hbWU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sdW1uR3JvdXBTaG93OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNsYXNzOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2xQYW5lbENsYXNzOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlclZhbHVlR2V0dGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGdyb3VwSWQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29sSWQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc29ydDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWVsZDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBGaWVsZDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJUb29sdGlwOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxDbGFzczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Um93R3JvdXA6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGFnZ0Z1bmM6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxFZGl0b3I6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNoYXJ0RGF0YVR5cGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc29ydGVkQXQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxleDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtaW5XaWR0aDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXhXaWR0aDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dHcm91cEluZGV4OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHBpdm90SW5kZXg6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZG5kU291cmNlT25Sb3dEcmFnOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlR2V0dGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlU2V0dGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlclZhbHVlR2V0dGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGtleUNyZWF0b3I6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyRnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZUZvcm1hdHRlcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWRSb3dWYWx1ZUZvcm1hdHRlcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZVBhcnNlcjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb21wYXJhdG9yOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGVxdWFsczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdENvbXBhcmF0b3I6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NLZXlib2FyZEV2ZW50OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGNvbFNwYW46IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93U3BhbjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRRdWlja0ZpbHRlclRleHQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgbmV3VmFsdWVIYW5kbGVyOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbFZhbHVlQ2hhbmdlZDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkNlbGxDbGlja2VkOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbERvdWJsZUNsaWNrZWQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsQ29udGV4dE1lbnU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RHJhZ1RleHQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwVmFsdWVHZXR0ZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyU2VsZWN0b3I6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvclNlbGVjdG9yOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2VsbEZsYXNoOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ29sdW1uc1Rvb2xQYW5lbDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZpbHRlcnNUb29sUGFuZWw6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgb3BlbkJ5RGVmYXVsdDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXJyeUNoaWxkcmVuOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGhpZGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93R3JvdXA6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3Q6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2hlY2tib3hTZWxlY3Rpb246IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb246IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb25GaWx0ZXJlZE9ubHk6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNZW51OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzU29ydGluZzogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01vdmFibGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NGaWx0ZXI6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9ja1Bvc2l0aW9uOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGxvY2tWaXNpYmxlOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGxvY2tQaW5uZWQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgdW5Tb3J0SWNvbjogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1NpemVUb0ZpdDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1Jlc2l6ZTogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0F1dG9TaXplOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVJvd0dyb3VwOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVBpdm90OiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVZhbHVlOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGVkaXRhYmxlOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUGFzdGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NOYXZpZ2FibGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbENoYW5nZUZsYXNoOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHJvd0RyYWc6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZG5kU291cmNlOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGF1dG9IZWlnaHQ6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgc29ydGFibGU6IGFueTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVzaXphYmxlOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIHNpbmdsZUNsaWNrRWRpdDogYW55O1xuICAgIC8vIEBFTkRAXG5cbn1cbiJdfQ==