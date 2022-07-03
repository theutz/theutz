<?php

namespace App\Filament\Pages;

use App\Settings\Globals;
use Filament\Pages\SettingsPage;
use Filament\Forms;

class ManageGlobals extends SettingsPage
{
    protected static ?string $navigationIcon = 'heroicon-o-cog';

    protected static string $settings = Globals::class;

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\Card::make()->schema([
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\MarkdownEditor::make('description')->required(),
                Forms\Components\MarkdownEditor::make('bio')->required(),
                Forms\Components\FileUpload::make('logo')->disk('linode')->directory('/')->visibility('public')->image()->required()
            ]),
            Forms\Components\Card::make()->schema([
                Forms\Components\TextInput::make('facebook')->url()->required(),
                Forms\Components\TextInput::make('instagram')->url()->required(),
                Forms\Components\TextInput::make('twitter')->url()->required(),
                Forms\Components\TextInput::make('linkedin')->url()->required(),
                Forms\Components\TextInput::make('email')->email()->required(),
            ])
        ];
    }
}
