<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ExperienceResource\Pages;
use App\Filament\Resources\ExperienceResource\RelationManagers;
use App\Models\Experience;
use Closure;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Str;

class ExperienceResource extends Resource
{
    protected static ?string $model = Experience::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make()->columns(3)->schema([
                    TextInput::make('title')
                        ->columnSpan(3)
                        ->reactive()
                        ->afterStateUpdated(function (Closure $set, $state) {
                            $set('slug', Str::slug($state));
                            $set('company_name', $state);
                        })
                        ->required(),
                    Card::make()->columns(2)->columnSpan(2)->schema([
                        Fieldset::make('Job Info')->schema([
                            TextInput::make('company_name')->required(),
                            TextInput::make('job_title')
                                ->required(),
                        ]),
                        Fieldset::make('Date Range')->schema([
                            DatePicker::make('start_date')
                                ->reactive()
                                ->afterStateUpdated(function (Closure $set, $state) {
                                    $set('end_date', $state);
                                })
                                ->required(),
                            DatePicker::make('end_date'),
                        ]),
                        Fieldset::make('Location')->schema([
                            TextInput::make('city_state')->label('City & State'),
                            TextInput::make('country'),
                        ]),
                        MarkdownEditor::make('content')->label('Description')->columnSpan(2),
                    ]),
                    Card::make()->columnSpan(1)->schema([
                        TextInput::make('slug')->required(),
                        DatePicker::make('published_at')->default(now())->required(),
                    ]),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                Tables\Columns\TextColumn::make('start_date')->since()->sortable()
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListExperiences::route('/'),
            'create' => Pages\CreateExperience::route('/create'),
            'view' => Pages\ViewExperience::route('/{record}'),
            'edit' => Pages\EditExperience::route('/{record}/edit'),
        ];
    }
}
